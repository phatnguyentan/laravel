<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('uuid');
            $table->string('name');
            $table->integer('user_id');
            $table->integer('core_app_id');
            $table->integer('category_id')->nullable();
            $table->string('seo_title')->nullable();
            $table->string('slug')->nullable();
            $table->text('excerpt')->nullable();
            $table->text('description')->nullable();
            $table->text('media')->nullable();
            $table->boolean('published')->default(false);
            $table->boolean('active')->default(true);
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
        Schema::dropIfExists(' products');
    }
}
