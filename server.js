var express=require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('booked',['booked']);
var bodyParser=require('body-parser');
app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());
app.get('/bookdetails',function(req,res){
db.booked.find(function(err,docs){
 console.log(docs)
 res.json(docs);
 });
});

app.post('/controller/bookdetails',function(req,res){
console.log(req.body)
db.booked.insert(req.body,function(err,doc)
{
res.json(doc);
});
});
app.delete('/controllers/bookdetails/:id',function(req,res){
var id=req.params.id;
console.log(id);
db.booked.remove({_id:mongojs.ObjectId(id)},function(err,doc){
res.json(doc);
});

});
app.get('/controllers/bookdetails/:id',function(req,res){
var id=req.params.id;
console.log(id);
db.booked.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
res.json(doc);
});
});

app.put('/controllers/bookdetails/:id',function(req,res){
var id=req.params.id;
db.booked.findAndModify({
query: {_id:mongojs.ObjectId(id)},
update: {$set: {name:req.body.name, date:req.body.date, time:req.body.time, size:req.body.size, contact:req.body.contact}},
new:true},function(err,doc){
res.json(doc);
}
);
});

	
app.listen(3000);
console.log("server running on port 3000");