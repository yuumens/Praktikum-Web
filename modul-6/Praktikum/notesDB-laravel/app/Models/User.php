<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // Sesuaikan dengan atribut-atribut yang dimiliki oleh model User
    protected $fillable = [
        'name', 'email', 'password',
    ];

    // Sesuaikan dengan atribut-atribut yang tidak ingin diungkapkan
    protected $hidden = [
        'password', 'remember_token',
    ];
}
