import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

const array = [
    {id:1, name: "Ionut", age: 25},
    {id:2, name: "Maria", age: 30},
    {id:3, name: "George", age: 28},
    {id:4, name: "Ana", age: 22},
    {id:5, name: "Marius", age: 35}
];

router.route("/getList/:id").get((req, res) => {
    const id = parseInt(req.params.id);
    const item = array.find(el => el.id === id);
    if (!item) {
        return res.status(404).json({ message: "Resource not found" });
    }
    res.json(item);
});

router.route("/postList").post((req, res) => {
    let el = req.body;
    array.push(el);
    res.json(el);
});

let port = 8000;
app.listen(port);
console.log("API is running");
