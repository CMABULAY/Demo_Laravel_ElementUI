<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $guarded = ['id'];
    public $appends = ['quantity_diff'];
    

    public function employee()
    {
        return $this->hasOne(User::class, "id", "employee");
    }
    public function getQuantityDiffAttribute(){
        return  (   $this->quantity - Orders::where("product_id",$this->id)->get()->sum('quantity'))  ;
    }
}
