<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create</title>
</head>
<body>
    <div class="container mt-2">
        <div class="row">
            <h2>Add User</h2>
        </div>
        <div>
            <a href="{{route('guests.index')}}" class="a btn btn-primary">Back</a>
        </div>
        @if (session('status'))
            <div class="alert alert-sucess">
                {{ session('status')}}
            </div>
        @endif
    </div>
    <form action="{{route('guests.store')}}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-md-12">
                <div class="form-group  mt-3">
                    <strong>Firstname</strong>
                    <input type="text" name="firstname" class="form-control" placeholder="Firstname">
                    @error('firstname')
                    <div class="alert alert-danger">{{ $message}}</div>
                    @enderror
                </div>
            </div>
            
            <div class="col-md-12">
                <div class="form-group mt-3">
                    <strong>Lastname</strong>
                    <input type="text" name="lastname" class="form-control" placeholder="Lastname">
                    @error('lastname')
                    <div class="alert alert-danger">{{ $message}}</div>
                    @enderror
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group mt-3">
                    <strong>Email</strong>
                    <input type="text" name="email class="form-control" placeholder="Email">
                    
                </div>
            </div>

            <div class="col-md-12">
                <div class="form-group mt-3">
                    <strong>Password</strong>
                    <input type="text" name="password" class="form-control" placeholder="Password">
                    @error('password')
                    <div class="alert alert-danger">{{ $message}}</div>
                    @enderror
                </div>

            <div class="col-md-12">
                <div class="form-group mt-3">
                    <strong>Car Owner</strong>
                    <input type="checkbox" name="role" class="form-control" placeholder="Role">
                    @error('role')
                    <div class="alert alert-danger">{{ $message}}</div>
                    @enderror
                </div>
            </div>

            <div class="col-md-12">
                <button type='submit' class='mt-3 btn btn-primary'>Submit</button>
            </div>
        </div>
    </form>
    
</body>
</html>