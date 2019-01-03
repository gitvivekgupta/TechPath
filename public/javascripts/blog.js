
var blogs = [];

blogs.push(
    {
        title: "Happy new Year",
        date: "00-00-0000",
        company: "XYZ"
    },
    {
        title: "Happy New Year Again",
        date: "10-00-0000",
        company: "XYZ"
    },
    {
        title: "Happy Coding!",
        date: "12-21-21",
        company: "XYZ"
    },
    {
        title: "xyz",
        date: "12-21-21",
        company: "XYZ"
    },
    {
        title: "xyz",
        date: "12-21-21",
        company: "XYZ"
    }
);

// ----big blog js

for(var i=0; i<blogs.length; i++) {

    var blog_title = blogs[i].title;
    var blog_date = blogs[i].date;

    var big_blog_list = document.createElement("li");
    big_blog_list.setAttribute('class', 'card-listitem card-featured');
    big_blog_list.setAttribute('id', 'bigli'+i);
    document.getElementById("showblog").appendChild(big_blog_list);

        var big_list_div_one = document.createElement("div");
        big_list_div_one.setAttribute('class', 'card');
        big_list_div_one.setAttribute('id', 'one-nested-card'+i);
        document.getElementById("bigli"+i).appendChild(big_list_div_one);

            var big_nested_div_one = document.createElement("div");
            big_nested_div_one.setAttribute('class', 'card-image');
            big_nested_div_one.setAttribute('id', 'one-nested-card-image'+i);
            document.getElementById("one-nested-card"+i).appendChild(big_nested_div_one);

                var big_nested_div_one_atag = document.createElement("a");
                big_nested_div_one_atag.setAttribute('id', 'one-nested-atag'+i);
                document.getElementById("one-nested-card-image"+i).appendChild(big_nested_div_one_atag);

                    var big_nested_div_imgtag = document.createElement("img");
                    document.getElementById("one-nested-atag"+i).appendChild(big_nested_div_imgtag);

                        var big_nested_div_two = document.createElement("div");
                        big_nested_div_two.setAttribute('class', 'card-content');
                        big_nested_div_two.setAttribute('id', 'second-nested-div-card-content'+i);
                        document.getElementById("one-nested-card"+i).appendChild(big_nested_div_two);

                            var big_nested_div_two_ptag = document.createElement("p");
                            big_nested_div_two_ptag.setAttribute('class', 'card-date');
                            big_nested_div_two_ptag.setAttribute('id', 'add-date'+i);
                            document.getElementById("second-nested-div-card-content"+i).appendChild(big_nested_div_two_ptag);
                            document.getElementById("add-date"+i).innerHTML = blog_date; // Add Date

                                var big_nested_div_two_headtag = document.createElement("h3");
                                big_nested_div_two_headtag.setAttribute('class', 'card-heading');
                                big_nested_div_two_headtag.setAttribute('id', 'second-nested-div-card-heading'+i);
                                document.getElementById("second-nested-div-card-content"+i).appendChild(big_nested_div_two_headtag);

                                    var big_nested_div_two_atag = document.createElement("a");
                                    big_nested_div_two_atag.setAttribute('id', 'add-heading'+i);
                                    document.getElementById("second-nested-div-card-content"+i).appendChild(big_nested_div_two_atag);
                                    document.getElementById("add-heading"+i).innerHTML = blog_title;  // Add title

                                        var big_nested_div_two_nested_div = document.createElement("div");
                                        big_nested_div_two_nested_div.setAttribute('class', 'card-author');
                                        big_nested_div_two_nested_div.setAttribute('id', 'second-nested-div-card-author'+i);
                                        document.getElementById("second-nested-div-card-content"+i).appendChild(big_nested_div_two_nested_div);

                                            var big_nested_div_two_nested_div_atag = document.createElement("a");
                                            big_nested_div_two_nested_div_atag.setAttribute('id', 'second-nested-div-card-author-atag'+i);
                                            document.getElementById("second-nested-div-card-author"+i).appendChild(big_nested_div_two_nested_div_atag);

                                                var big_nested_div_two_nested_div_imgtag = document.createElement("img");
                                                document.getElementById("second-nested-div-card-author-atag"+i).appendChild(big_nested_div_two_nested_div_imgtag);

                                                var next_line = document.createElement("br");
                                                document.getElementById("bigli"+i).appendChild(next_line);

                                                var next_line = document.createElement("br");
                                                document.getElementById("bigli"+i).appendChild(next_line);
}


// ----small blog js

// var small_blog_list = document.createElement("li");
// small_blog_list.setAttribute('class', 'card-listitem');
// small_blog_list.setAttribute('id', 'second-list-div-card-listitem');
// document.getElementById("showblog").appendChild(small_blog_list);

// var small_blog_list_div = document.createElement("div");
// small_blog_list_div.setAttribute('class', 'card');
// small_blog_list_div.setAttribute('id', 'second-list-div-card');
// document.getElementById("second-list-div-card-listitem").appendChild(small_blog_list_div);

// var small_blog_list_nested_div_one = document.createElement("div");
// small_blog_list_nested_div_one.setAttribute('class', 'card-image');
// small_blog_list_nested_div_one.setAttribute('id', 'second-list-nested-div-one-card-image');
// document.getElementById("second-list-div-card").appendChild(small_blog_list_nested_div_one);

// var small_blog_list_nested_div_one_atag = document.createElement("a");
// small_blog_list_nested_div_one_atag.setAttribute('id', 'second-list-nested-div-one-atag');
// document.getElementById("second-list-nested-div-one-card-image").appendChild(small_blog_list_nested_div_one_atag);

// var small_blog_list_nested_div_one_imgtag = document.createElement("img");
// document.getElementById("second-list-nested-div-one-atag").appendChild(small_blog_list_nested_div_one_imgtag);

// var small_blog_list_nested_div_two = document.createElement("div");
// small_blog_list_nested_div_two.setAttribute('class', 'card-content');
// small_blog_list_nested_div_two.setAttribute('id', 'second-list-nested-div-two-card-content');
// document.getElementById("second-list-div-card").appendChild(small_blog_list_nested_div_two);

// var small_blog_list_nested_div_two_ptag = document.createElement("p");
// small_blog_list_nested_div_two_ptag.setAttribute('class', 'card-date');
// document.getElementById("second-list-nested-div-two-card-content").appendChild(small_blog_list_nested_div_two_ptag);

// var small_blog_list_nested_div_two_head = document.createElement("h3");
// small_blog_list_nested_div_two_head.setAttribute('class', 'card-heading');
// small_blog_list_nested_div_two_head.setAttribute('id', 'second-list-nested-div-two-card-heading');
// document.getElementById("second-list-nested-div-two-card-content").appendChild(small_blog_list_nested_div_two_head);

// var small_blog_list_nested_div_two_atag = document.createElement("a");
// document.getElementById("second-list-nested-div-two-card-heading").appendChild(small_blog_list_nested_div_two_atag);

// var small_blog_list_nested_div_three = document.createElement("div");
// small_blog_list_nested_div_three.setAttribute('class', 'card-author');
// small_blog_list_nested_div_three.setAttribute('id', 'second-list-nested-div-one-card-content');
// document.getElementById("second-list-nested-div-two-card-content").appendChild(small_blog_list_nested_div_three);

// var small_blog_list_card_content_nested_div_one_atag = document.createElement("a");
// small_blog_list_card_content_nested_div_one_atag.setAttribute('id', 'second-list-nested-div-one-card-content-atag');
// document.getElementById("second-list-nested-div-one-card-content").appendChild(small_blog_list_card_content_nested_div_one_atag);

// var small_blog_list_card_content_nested_div_one_imgtag = document.createElement("img");
// document.getElementById("second-list-nested-div-one-card-content-atag").appendChild(small_blog_list_card_content_nested_div_one_imgtag);




// ----select blog js

$(document).ready(function(e) {

    $(".names").chosen();
});