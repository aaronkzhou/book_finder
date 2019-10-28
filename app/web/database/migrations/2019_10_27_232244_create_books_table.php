<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('author');
            $table->string('name');
            $table->string('subtitle');
            $table->string('description');
            $table->string('genres');
            $table->string('release_date');
            $table->string('vote');
            $table->string('sale_data');
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
        Schema::dropIfExists('books_info');
    }
}
