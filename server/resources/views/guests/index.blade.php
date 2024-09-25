<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel CRUD Index</title>
</head>
<body>
    <div class="container mt-2">
        <div class='col-lg-12 text-center'>
            <div class="h2">Laravel CRUD</div>
        </div>
        <div>
            <a href="{{route('guests.create')}}" class="a btn btn-success">Create</a>
        </div>
        @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{$message}}</p>
        </div>
        @endif

        
        <table class='table table-borderd'>
            <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Role</th>
                <th width='280px'>Action</th>
            </tr>
            @foreach($guests as $guest)
                <tr>
                    <td>{{ $guest->id }}</td>
                    <td>{{ $guest->Firstname }}</td>
                    <td>{{ $guest->Lastname }}</td>
                    <td>{{ $guest->email }}</td>
                    <td>{{ $guest->role }}</td>
                </tr>
            @endforeach
        </table>
    </div>
</body>
</html>