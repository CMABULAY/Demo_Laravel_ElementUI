<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCalllistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // `id` int(11) NOT NULL auto_increment,
        // `level` int(11) default NULL,
        // `name` varchar(50) default NULL,
        // `clid` int(11) default NULL,

        Schema::create('calllists', function (Blueprint $table) {
            $table->id();
            $table->integer('level')->nullable();
            $table->string('name',50)->nullable();
            $table->integer('clid')->references('id')->on('callgroups');
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
        Schema::dropIfExists('calllists');
    }
}
