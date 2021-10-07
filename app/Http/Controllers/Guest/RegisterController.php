<?php

namespace App\Http\Controllers\Guest; 
use App\User;
use App\Http\Controllers\Controller;
use App\Jobs\RegisterJob;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store(Request $request){
        
        if(User::where("email",$request->email)->get()->count()>0){
            return json_encode(['message'=>'Email already taken']);
        }else{
            $data = User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=>bcrypt($request->password)]); 
            
            try {
                RegisterJob::dispatch($data, $request->email);
            } catch (\Throwable $th) {} 
            return json_encode(['message'=>"User successfully registered"]);
                        

        }  


    }
}
