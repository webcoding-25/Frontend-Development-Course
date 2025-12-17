// Object Structure

let student = {
	name :"rahul",
	age: 30,
	email: "rahul@gamil.com",

	info: function(){
		console.log("Hello I am Rahul")
	}

}

// Real Life example of Object

let instaUser = {
	username: "Webcoding",
	followers: 200,

	profile: function(){
		console.log(this.username + " has " +  this.followers + " Followers ")
	}
}


// class in javascript

class instaUsers {
	constructor(username, followers){
		this.username = username;
		this.followers = followers;
	}

	details(){
		console.log(this.username + " has " +  this.followers + " Followers ")
	}

	post(){
		console.log(this.username + " can post on insta" )
	}
}

let user1 = new instaUsers("webcoding", 200);
// let user2 = new instaUsers("Rahul", 300)
// user1.details()
// user1.post()

// class with extend in javascript

class newUsers extends instaUsers {
	constructor(username, followers, follow){
		super(username, followers)
		this.follow = follow;
	}

	following(){
		console.log(this.username + " has " + this.followers + " followers  & " + this.follow + " following")
	}
	
}

let user2 = new newUsers("Rahul", 300, 150)
user2.following();


