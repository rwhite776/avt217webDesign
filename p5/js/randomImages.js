$(document).ready(function() {
	randomImage();
});

function randomImage() {
	var randomImage = {
	        paths: [
	          "https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
						"https://data.whicdn.com/images/323682115/original.jpg?t=1544630358",
						"https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/2-dog.jpg",
						"https://images.wagwalkingweb.com/media/articles/dog/blood-in-urine/blood_in_urine.jpg",
						"https://www.gannett-cdn.com/presto/2019/02/12/PNJM/f5557514-74d7-4c5c-a24a-6aae3866d076-021219_Hasbrouck_Heights_AdoptLove_016.JPG",
						"https://peopledotcom.files.wordpress.com/2017/11/dog.jpg",
						"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/19/09/dogs-purpose.jpg",
						"https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84NDAvb3JpZ2luYWwva3VubWluZy1taWxpdGFyeS1kb2ctTk8tUkVVU0UuanBn",
						"https://www.humanesociety.org/sites/default/files/2019/02/dog-451643.jpg",
						"https://i.pinimg.com/originals/ba/3f/ef/ba3fef2891824cfca6eb73c4d2bd5cca.jpg",
	        ],
	        generate: function(){
	          var path = randomImage.paths[Math.floor(Math.random()*randomImage.paths.length)];
	          var img = new Image();
	          img.src = path;
	          $("a.random").html(img);
	          $("a.random").attr("href", path);
	        }
	      }
	      randomImage.generate();
}
