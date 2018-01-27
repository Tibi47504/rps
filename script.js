

function rockButtonClicked(){
	var a = 'Rock';
	var b = 'Paper';
	var c = 'Scissors';
	var player = a;
		var computer = Math.floor(Math.random() * 3 + 1);
if (computer == 1){
	eredmeny = a
}
else if (computer == 2){
	eredmeny = b
}
else{
	eredmeny = c
}
alert('Player: ' +player + '\n' + ' ' + '\n' + 'Computer: ' +eredmeny);
if(player==eredmeny){
	alert('Draw!')
  }
else if(player==a && eredmeny==b || player==b && eredmeny==c){
	alert('Computer won!')
}
else{
	alert('You won!')
	}
}

function paperButtonClicked(){
	var a = 'Rock';
	var b = 'Paper';
	var c = 'Scissors';
	var player = b;
		var computer = Math.floor(Math.random() * 3 + 1);
if (computer == 1){
	eredmeny = a
}
else if (computer == 2){
	eredmeny = b
}
else{
	eredmeny = c
}
alert('Player: ' +player + '\n' + ' ' + '\n' + 'Computer: ' +eredmeny);
if(player==eredmeny){
	alert('Draw!')
}
else if(player==a && eredmeny==b || player==b && eredmeny==c){
	alert('Computer won!')
}
else{
	alert('You won!')
	}
}

function scissorsButtonClicked()
{
	var a = 'Rock';
	var b = 'Paper';
	var c = 'Scissors';
	var player = c;
		var computer = Math.floor(Math.random() * 3 + 1);
if (computer == 1){
	eredmeny = a
}
else if (computer == 2){
	eredmeny = b
}
else{
	eredmeny = c
}
alert('Player: ' +player + '\n' + ' ' + '\n' + 'Computer: ' +eredmeny);
if(player==eredmeny){
	alert('Draw!')
}
else if(player==a && eredmeny==b || player==b && eredmeny==c){
	alert('Computer won!')
}
else{
	alert('You won!')
	}
}