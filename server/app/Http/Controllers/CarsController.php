<?php

namespace App\Http\Controllers;

use App\Models\Cars;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'brand' => 'required',
            'name' => 'required',
            'model' => 'required',
            'speed' => 'required',
            'seatType' => 'required',
            'automatic' => 'required',
            'gps' => 'required',
            'price' => 'required',
            'detail' => 'required',
            'imgUrl' => 'required|image'
        ]);
        try {
            $imageName = Str::random() . '.' . $request->imgUrl->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('cars/image', $request->imgUrl, $imageName );
            Cars::create($request->post()+['image'=>$imageName]);
            return response()->json([
                'message' => 'Add Car successfully'
            ]);
        } catch(\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => "Adding Something wrong"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cars  $cars
     * @return \Illuminate\Http\Response
     */
    public function show(Cars $cars)
    {
        //
        return response()->json([
            'car'=> $cars
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cars  $cars
     * @return \Illuminate\Http\Response
     */
    public function edit(Cars $cars)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cars  $cars
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cars $cars)
    {
        $request->validate([
            'brand' => 'required',
            'name' => 'required',
            'model' => 'required',
            'speed' => 'required',
            'seatType' => 'required',
            'automatic' => 'required',
            'gps' => 'required',
            'price' => 'required',
            'detail' => 'required',
            'imgUrl' => 'nullable'
        ]);

        try {
            $cars->fill($request->post())->update();
            if ($request->hasFile('image')) {
                if ($car->imgUrl) {
                    $exists = Storage::disk('public')->exists("public/image/{$cars->imgUrl}");
                    if ($exists) {
                        Storage::disk('public')->delete("public/image/{$cars->imgUrl}");
                    }
                }

                $imageName = Str::random() . '.' . $request->imgUrl->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('cars/image', $request->imgUrl, $imageName );
                $cars->imgUrl = $imageName;
                $cars->save();
                return response()->json([
                    'message' => 'Updated Car successfully'
                ]);
            }

            return response()->json([
                'message' => 'Updated Car successfully'
            ]);

        } catch(\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => "Updating Something wrong"
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cars  $cars
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cars $cars)
    {
        //
        try {
            if ($car->imgUrl) {
                $exists = Storage::disk('public')->exists("public/image/{$cars->imgUrl}");
                if ($exists) {
                    Storage::disk('public')->delete("public/image/{$cars->imgUrl}");
                }
            }
            $cars->delete();

            return response()->json([
                'message'=> 'Cars deleted successfully'
            ]);

        } catch(\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message' => "Deleting Something wrong"
            ], 500);
        }
    }
}
