<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNotes;
use App\Http\Requests\UpdateNotes;
use App\Http\Resources\NotesCollection;
use App\Http\Resources\NotesResource;
use App\Models\Notes;
use Exception;
use App\Http\Controllers;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $queryData = Notes::all();

            // Periksa apakah ada catatan
            if ($queryData->isEmpty()) {
                return response()->json(['message' => 'Catatan tidak ditemukan'], 404);
            }

            $formattedDatas = new NotesCollection($queryData);

            return response()->json([
                "message" => "success",
                "data" => $formattedDatas
            ], 200);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNotes $request)
    {
        $validateRequest = $request->validated();
        try {
            $queryData = Notes::create($validateRequest);
            $formattedDatas = new NotesResource($queryData);
            return response()->json([
                "message" => "success",
                "data" => $formattedDatas
            ], 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $queryData = Notes::findOrFail($id);

            // Jika $queryData tidak null, berarti catatan ditemukan
            $formattedData = new NotesResource($queryData);

            return response()->json([
                "message" => "success",
                "data" => $formattedData
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Notes Not Found'], 404);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNotes $request, string $id)
    {
        $validatedData = $request->validated();
        try {
            // Mencari catatan berdasarkan ID
            $queryData = Notes::findOrFail($id);

            // Mengambil data yang telah divalidasi dari request

            // Memperbarui catatan dengan data yang divalidasi
            $queryData->update($validatedData);

            // Menyimpan perubahan
            $queryData->save();

            // Mengembalikan data yang telah diperbarui dalam format NotesResource
            $formattedData = new NotesResource($queryData);

            // Memberikan respons JSON sukses
            return response()->json([
                "message" => "Catatan berhasil diperbarui",
                "data" => $formattedData
            ], 200);
        } catch (ModelNotFoundException $e) {
            // Memberikan respons JSON ketika catatan tidak ditemukan
            return response()->json(['message' => 'Catatan tidak ditemukan'], 404);
        } catch (Exception $e) {
            // Memberikan respons JSON ketika terjadi kesalahan lainnya
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $queryData = Notes::findOrFail($id);

            $formattedData = new NotesResource($queryData);

            $queryData->delete();

            return response()->json([
                "message" => "success",
                "data" => $formattedData
            ], 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'Catatan tidak ditemukan'], 404);
        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }
}

// class NotesController extends Controller
// {
//     public function index()
//     {
//         $notes = Notes::all();
//         return response()->json(['notes' => $notes]);
//     }


//     public function show($id)
//     {
//         $note = Notes::find($id);

//         if (!$note) {
//             return response()->json(['message' => 'Catatan tidak ditemukan'], 404);
//         }

//         return response()->json(['note' => $note]);
//     }


//     public function store(Request $request)
//     {
//         $request->validate([
//             'title' => 'required|string',
//             'content' => 'required|string',
//         ]);

//         $note = Notes::create([
//             'title' => $request->input('title'),
//             'content' => $request->input('content'),
//         ]);

//         return response()->json(['message' => 'Catatan berhasil disimpan', 'note' => $note], 201);
//     }

//     public function update(Request $request, $id)
//     {
//         $note = Notes::find($id);

//         if (!$note) {
//             return response()->json(['message' => 'Catatan tidak ditemukan'], 404);
//         }

//         $request->validate([
//             'title' => 'required|string',
//             'content' => 'required|string',
//         ]);

//         $note->update([
//             'title' => $request->input('title'),
//             'content' => $request->input('content'),
//         ]);

//         return response()->json(['message' => 'Catatan berhasil diperbarui', 'note' => $note]);
//     }

//     public function destroy($id)
//     {
//         $note = Notes::find($id);

//         if (!$note) {
//             return response()->json(['message' => 'Catatan tidak ditemukan'], 404);
//         }

//         $note->delete();

//         return response()->json(['message' => 'Catatan berhasil dihapus']);
//     }
// }
