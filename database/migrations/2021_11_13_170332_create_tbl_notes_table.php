<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_notes', function (Blueprint $table) {
            $table->id();
            $table->text('title');  
            $table->text('description')->nullable();  
            $table->dateTime('remind_date');   
            $table->integer('user_id')->references('id')->on('users');   
            $table->integer('status')->default(1); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_notes');
    }
}
