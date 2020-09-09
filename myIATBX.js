define(['pipAPI', 'https://francksa.github.io/testing/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Coke', //Will appear in the data.
			title : {
				media : {word : 'Coke'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'coke1.jpg'}, 
    			{image : 'coke2.jpg'}, 
    			{image : 'coke3.jpg'}, 
    			{image : 'coke4.jpg'}, 
    			{image : 'coke5.jpg'}, 
    			{image : 'coke6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Pepsi', //Will appear in the data.
			title : {
				media : {word : 'Pepsi'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'pepsi1.jpg'}, 
    			{image : 'pepsi4.jpg'}, 
    			{image : 'pepsi5.jpg'}, 
    			{image : 'pepsi2.jpg'}, 
    			{image : 'pepsi3.jpg'}, 
    			{image : 'pepsi6.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://francksa.github.io/testing/'
		} 
	});
});
