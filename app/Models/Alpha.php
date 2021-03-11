<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alpha extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [ 'alphaname', 'user_id'];

    public function user()
    {
        return $this->belongsTo(user::class);
    }

}
