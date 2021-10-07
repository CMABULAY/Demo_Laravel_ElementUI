<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Models\Orders;
use App\Models\Products;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function get(Request $request){
        return Orders::with(['employee','product_id'])->get();
    }
    public function store(Request $request){   
        if( Products::where("id",$request->product_id)->first()->quantity_diff >= (float)$request->quantity){
            if(Products::where("id",$request->product_id)->first()->quantity_diff > 0){
                Orders::create(['product_id'=>$request->product_id,
                    'quantity'=>$request->quantity,
                    'employee'=>auth()->user()->id]);
                return ['message'=>'You have successfully ordered this product.'];
           } else{ 
                return ['message'=>'Failed to order this product due to unavailability of the stock'];
           } 
        }else{
            return ['message'=>'Failed to order this product due to unavailability of the stock'];

        }
          
  
    }
}
