<?php

namespace App\Http\Controllers;
use App\BooksInfo;

class BookController extends Controller
{
    /**
     * Retrieve the books for the given name.
     *
     * @param  string  $name
     * @return Response
     */
    public function findByName($name)
    {
        return response()->json(BooksInfo::where('name', 'LIKE', '%'.$name.'%')->get());
    }
}
