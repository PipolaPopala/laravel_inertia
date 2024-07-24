<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    public function delete(User $user)
    {
        // return $user->is_admin;
        return $user->email === 'neo@mail.com';
    }
}
