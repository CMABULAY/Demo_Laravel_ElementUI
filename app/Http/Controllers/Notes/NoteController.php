<?php

namespace App\Http\Controllers\Notes;

use App\Http\Controllers\Controller;
use App\Models\tbl_note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function getData(){
        // return auth user with status active in the list
        return tbl_note::where(["user_id"=>auth()->user()->id,'status'=>1])->get();
    }

    public function saveData(Request $request){
        $request->validate([
            'title' => 'required', 
        ]);
        // saving items from the request
        return tbl_note::create($request->only('title','description','remind_date') + ['user_id'=>auth()->user()->id]); 
    }
    
    public function updateData(Request $request){ 
        $request->validate([
            'title' => 'required', 
        ]);
        // update item from the request
       return tbl_note::where("id",$request->id)->update($request->only('title','description','remind_date') + ['user_id'=>auth()->user()->id]);
    }

    public function deleteData(Request $request){ 
        // I don't basically delete, i just change the status if the data is not in use. 
        return tbl_note::where("id",$request->id)->update(['status'=>0]);
    }
}
