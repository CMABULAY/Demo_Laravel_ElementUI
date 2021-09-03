<?php

namespace App\Http\Controllers;

use App\callgroups;
use App\calllists;
use Illuminate\Http\Request;

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
    public function store(){ 

            if(calllists::count() > 0){
                return 'Sample data are already uploaded.';
            }else{
                foreach ([1,2,3,4] as $key => $value) {      
                    calllists::create(['name'=> 'g'.$value.'name'.$value,
                        'level'=> $value,
                        'clid' =>$value,
                    ]); 
                }
                return 'Sample has been successfully added.';
            } 
    }
    public function actions(Request $request){  
      return  calllists::where("id", $request->id)->update(['created_at'=> date('Y-m-d h:i:s A')]); 
    }
    public function actions1(Request $request){
        $dt1 = $request->current;
        $dt2 = $request->old;
        switch ($request->type) {
            case 'up':
             calllists::where('id',$dt1['id'])->update([
                 'name'=>$dt2['name'],
                 'level'=>$dt2['level'], 
             ]);
             calllists::where('id',$dt2['id'])->update([
                'name'=>$dt1['name'],
                'level'=>$dt1['level'], 
            ]);
            break;
            case 'down':
                calllists::where('id',$dt1['id'])->update([
                    'name'=>$dt2['name'],
                    'level'=>$dt2['level'], 
                ]);
                calllists::where('id',$dt2['id'])->update([
                   'name'=>$dt1['name'],
                   'level'=>$dt1['level'], 
               ]);
               break;
            default:
                # code...
                break;
        }
    
    }
 
}
