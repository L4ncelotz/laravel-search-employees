<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Products/Index', ['products' => $this->products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = collect($this->products)->firstWhere('id',$id);

        if(!$products) {
            abort(404,'Product not found');
        }

        return Inertia::render('Product/Show', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    private $products = [
        ['id' => 1, 'name' => 'Laptop',
        'description' => 'High-performance laptop',
        'price' => 1500],
        ['id' => 2,'name' => 'Smartphone',
        'description' => 'Lastest smartphone with great features',
        'price' => 800],
        ['id' =>3, 'name' => 'Tablet',
        'description' => 'Portable tablet for everyday use',
        'price' => 500],
    ];
}
