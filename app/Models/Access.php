<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Access extends Model
{
    use HasFactory;
    protected $table = "accesses";

    /**
     * @return Access
     */
    public function report(): Access
    {
        $access = $this->whereDate("created_at", '=', DATE('Y-m-d'))->first();
        if (!$access) {
            $this->users = 1;
            $this->views = 1;
            $this->pages = 1;
            setcookie("access", true, time() + 86400, "/");
            session()->put("access", true);
            $this->save();
            return $this;
        }
        if (!filter_input(INPUT_COOKIE, "access")) {
            $access->users += 1;
            setcookie("access", true, time() + 86400, "/");
        }
        if (!session()->has("access")) {
            $access->views += 1;
            session()->put("access", true);
        }
        $access->pages += 1;
        $access->save();
        return $this;
    }
}
