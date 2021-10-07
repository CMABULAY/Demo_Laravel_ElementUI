<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function get(Request $request){
        return Products::with(['employee'])->get();
    }
    public function store(Request $request){ 
        
        if($request->id){
            Products::query()
            ->where("id",$request->id)
            ->update(['product_name'=>$request->product_name,
            'quantity'=>$request->quantity,
            'employee'=>auth()->user()->id]);
        }else{ 
            Products::create(['product_name'=>$request->product_name,
                              'quantity'=>$request->quantity,
                              'employee'=>auth()->user()->id]);
        }  
        return $request->all();
    }
}
