<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model; 
class Orders extends Model
{
    protected $guarded = ['id'];
    public function employee()
    {
        return $this->hasOne(User::class, "id", "employee");
    }
    public function product_id()
    {
        return $this->hasOne(Products::class, "id", "product_id");
    }
    
}
