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
            $table->string('Activity_name','max')->nullable();
            $table->string('Activity_zone','max')->nullable(); 
            $table->dateTime('Activity_date')->nullable();
            $table->dateTime('Activity_time')->nullable();
            $table->string('Instant_delivery','max')->nullable();
            $table->string('Activity_type','max')->nullable();
            $table->string('Resources','max')->nullable();
            $table->string('Activity_form','max')->nullable();
            $table->integer('Deleted')->default(0);
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
