<?php

use App\Models\Products;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //MSSql server have a identity issue, 
        try {  
            Products::insert([ 
                [
                    'id' => 1, 
                    'product_name'=> 'Tinapay',  
                    'quantity'=> 25,   
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ], [
                    'id' => 2,
                    'product_name'=> 'Kape',  
                    'quantity'=> 12,  
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ],[
                    'id' => 3,
                    'product_name'=> 'Asukal',  
                    'quantity'=> 2,  
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ],[
                    'id' => 4,
                    'product_name'=> 'Itlog',  
                    'quantity'=> 12,  
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ],[
                    'id' => 5,
                    'product_name'=> 'Saging',  
                    'quantity'=> 15,  
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ],
            ]); 
        } catch (\Throwable $th) {
            DB::unprepared('SET IDENTITY_INSERT Products ON');
            Products::insert([ 
                [
                    'id' => 1, 
                    'product_name'=> 'Tinapay',  
                    'quantity'=> 25,   
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ], [
                    'id' => 2,
                    'product_name'=> 'Kape',  
                    'quantity'=> 12,  
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ],[
                    'id' => 3,
                    'product_name'=> 'Asukal',  
                    'quantity'=> 2,  
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ],[
                    'id' => 4,
                    'product_name'=> 'Itlog',  
                    'quantity'=> 12,  
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ],[
                    'id' => 5,
                    'product_name'=> 'Saging',  
                    'quantity'=> 15,  
                    'employee'=> 1,  
                    'created_at'=> date("Y-m-d"),  
                ],
            ]);
            DB::unprepared('SET IDENTITY_INSERT Products OFF');
        }



   

    }
}
