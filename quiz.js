var quiz = {
	initialize: function () {
		this.currentCard = this.cards[0];
		this.currentCardChanged();
	},
	currentCard: null,
	currentCardIndex: 0,
	cards:
   [
      {
      	id: 341,
      	title: '',
      	titleimg: 'cards/image0-back.png',
      	content: '',
      	contentimg: 'cards/image0-front.png',
      	source: 'Lesson 1',
      	status: '',
      	tags:
		 [
		  'L1', 'v'
		 ],
      	properties:
         [
          { name: 'DiskSpace', value: '22.13 GB' },
          { name: 'Database Up?', value: 'Yes' }
         ]
      },

      {
      	id: 342,
      	title: '',
      	titleimg: 'cards/image1-back.png',
      	content: '',
      	contentimg: 'cards/image1-front.png',
      	source: 'Lesson 1',
      	status: '',
      	tags:
		 [
		  'L1', 'v'
		 ],
      	properties:
         [
      	//          { name: 'DiskSpace', value: '22.13 GB' },
      	//          { name: 'Database Up?', value: 'Yes' }
         ]
      },

      {
      	id: 343,
      	title: '',
      	titleimg: 'cards/image2-back.png',
      	content: '',
      	contentimg: 'cards/image2-front.png',
      	source: 'Lesson 1',
      	status: '',
      	tags:
		 [
		  'L1', 'v'
		 ],
      	properties:
         [
      	//          { name: 'DiskSpace', value: '22.13 GB' },
      	//          { name: 'Database Up?', value: 'Yes' }
         ]
      },

   ],
	render: function (index, itm) {
		try {
			var ret = "";
			ret += "<div ";
			ret += "class='entry " + itm.status + " " + (index % 2 == 0 ? 'even' : 'odd') + "'";
			ret += ">";
			var title = itm.title;
			if (title == "")
				title = "<img class='title' src='" + itm.titleimg + "'/>";
			ret += "<span class='title'>" + itm.title + "</span>";
			var content = itm.content;
			if (content == "")
				content = "<img class='content' src='" + itm.contentimg + "'/>";
			ret += "<div class='content'>" + content + "</div>";
			ret += "<div class='details'>";
			jQuery.each(itm.properties, function (j, itemdetail) {
				ret += "<div class='property'><span class='keyname'>" + itemdetail.name + "</span><span class='keyval'>" + itemdetail.value + "</span></div>";
			});
			ret += "</div>";
			ret += "</div>";
			return ret;
		} catch (e) {
			return "<div class='error'>Error rendering [" + itm.id + "]: " + e + "</div>";
			throw e;
		}
	},
	renderQuizCard: function (index, itm) {

	},
	nextCard: function () {
		if (this.currentCardIndex < this.cards.length)
			this.currentCardIndex++;
		else
			this.currentCardIndex = 0;
		this.currentCard = this.cards[this.currentCardIndex];
		this.currentCardChanged();
	},
	previousCard: function () {
		if (this.currentCardIndex > 0)
			this.currentCardIndex--;
		else
			this.currentCardIndex = this.cards.length;
		this.currentCard = this.cards[this.currentCardIndex];
		this.currentCardChanged();
	},
	currentCardChanged: function () { }

};
