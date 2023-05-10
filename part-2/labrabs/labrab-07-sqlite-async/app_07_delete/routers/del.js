const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();

const del_dog = (req, res) => {
    // http://localhost:3000/del/12
    let id = +req.params["id"];
    let query_delete = `DELETE FROM dogs WHERE id=?`;
    (new sqlite3.Database('./private/shelter.db'))
        .run(query_delete, [id], (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        })
        .close();
}

router.get('/:id', del_dog);

// router.get('/:id', (req, res) => {
//     // http://localhost:3000/del/12
//     let id = parseInt(req.params["id"]);
//     let query_delete = `DELETE FROM dogs WHERE id=?`;
//     (new sqlite3.Database('./private/shelter.db'))
//         .run(query_delete, [id], (err) => {
//             if (err) return console.error(err);
//             res.redirect('/');
//         })
//         .close();
// });

module.exports = router;
