<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDemoTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demo_tables', function (Blueprint $table) {
            $table->id();
            $table->string('name','max')->nullable();
            $table->string('zone','max')->nullable(); 
            $table->dateTime('date')->nullable();
            $table->dateTime('time')->nullable();
            $table->string('delivery','max')->nullable(); 
            $table->string('resources','max')->nullable();
            $table->string('form','max')->nullable();
            $table->integer('deleted')->default(0);
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
        Schema::dropIfExists('demo_tables');
    }
}
