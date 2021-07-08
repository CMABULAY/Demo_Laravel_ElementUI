<?php

namespace App\Http\Controllers;

use App\DemoTable;
use Illuminate\Http\Request;

class DemoController extends Controller
{
    public function store(Request $request)
    {
        return $data = DemoTable::create($request->all());
    }
    public function update(Request $request)
    {  
        return $data = DemoTable::where("id",$request->id)->update($request->except(['id','created_at','updated_at']));
    }
    public function delete(Request $request)
    {   
        return $data = DemoTable::where("id",$request->id)->update(['deleted'=>1]);
    }
    public function get(Request $request)
    {
        return DemoTable::where('deleted',0)->get();
    }
}
