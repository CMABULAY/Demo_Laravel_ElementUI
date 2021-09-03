<?php

namespace App\Http\Controllers;

use App\callgroups;
use App\calllists;
use Illuminate\Http\Request;
use Laravel\Ui\Presets\React;

class DemoListController extends Controller
{
    
    public function get1(){
        return callgroups::all();  
    }
    public function store1(){ 

        if(callgroups::count() > 0){
            return 'Sample data are already uploaded.';
        }else{
            foreach ([1,2,3,4] as $key => $value) {      
                callgroups::create(['groupname'=> 'group'.$value ]); 
            }
            return 'Sample has been successfully added.';
        } 
}

    public function get(Request $request){  
        return calllists::all();  
    }
    public function store(Request $request){ 

            if(calllists::count() > 0){
                return 'Sample data are already uploaded.';
            }else{
                foreach ([1,2,3,4] as $key => $value) {      
                    calllists::create(['name'=> 'g'.$value.'name'.$value,
                        'level'=> $value,
                        'clid' =>$request->id,
                    ]); 
                }
                return 'Sample has been successfully added.';
            } 
    }
    public function actions(Request $request){  
      return  calllists::where("id", $request->id)->update(['created_at'=> date('Y-m-d h:i:s A')]); 
    }
    public function actions1(Request $request){
    
        $data =   calllists::where('name','!=',null);  
   
   
        switch ($request->type) {
            case 'up':

                $data_v = clone $data;
                $data_v = $data_v->where("id",$request->current['id'])->first();
                $data_x = clone $data; 
                $data_x = $data_x->where("id",($request->current['id'] -1))->first();  
                calllists::where('id',$data_v->id)->update([
                    'name'=> $data_x->name, 
                ]); 
                calllists::where('id',$data_x->id )->update([
                    'name'=> $data_v->name, 
                ]);
               
            break;
            case 'down':
                $data_v = clone $data;
                $data_v = $data_v->where("id",$request->current['id'])->first();
                $data_x = clone $data; 
                $data_x = $data_x->where("id",($request->current['id'] + 1))->first();  
                calllists::where('id',$data_v->id)->update([
                    'name'=> $data_x->name, 
                ]); 
                calllists::where('id',$data_x->id )->update([
                    'name'=> $data_v->name, 
                ]);
            break;
            case 'top':
                $data_v = clone $data;
                $data_v = $data_v->where("id",$request->current['id'])->first();
                $data_x = clone $data; 
                $data_x = $data_x->where("id",1)->first();  
                calllists::where('id',$data_v->id)->update([
                    'name'=> $data_x->name, 
                ]);  
                calllists::where('id',$data_x->id )->update([
                    'name'=> $data_v->name, 
                ]);
            break;
            case 'bottom':
                $data_v = clone $data;
                $data_v = $data_v->where("id",$request->current['id'])->first();
                $data_x = clone $data; 
                $data_x = $data_x->where("id", 4 )->first();  
                calllists::where('id',$data_v->id)->update([
                    'name'=> $data_x->name, 
                ]);  
                calllists::where('id',$data_x->id )->update([
                    'name'=> $data_v->name, 
                ]);
            break;
            default:
                # code...
                break;
        }
    
    }
 
}
