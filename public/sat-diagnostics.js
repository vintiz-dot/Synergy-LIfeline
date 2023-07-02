const landing = document.getElementById("default");

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  question.addEventListener("click", (x) => {
    if (x.target?.type !== "checkbox") return;

    console.log(x.target);
  });
});
const nextPage = document.getElementById("nxt-pg");
nextPage.addEventListener("click", (x) => {
  x.preventDefault();
  landing.innerHTML = "";
  landing.insertAdjacentHTML(
    "afterbegin",

    ` <div class="container" style="margin-top: 30px;">
<div class="row">
<div style="padding-bottom: 15px;" >
  <h1 style="margin: auto;">SECTION 1</h1>
  <p > <strong >65 MINUTES, 52 QUESTIONS</strong><br></p>   
  <span style="color: white; background-color: black; padding:5px;">DIRECTIONS</span><p style="padding: 10px 0;">Each passage or pair of passages below is followed by a number of questions. After reading
each passage or pair, choose the best answer to each question based on what is stated or
implied in the passage or passages and in any accompanying graphics (such as a table or
graph).</p>
  </div>
  <div class="col-lg-7 col-md-4 col-sm-12"><p><strong>Questions 11-20 are based on the following
  passage and supplementary material.</strong></p>
<p>
This passage is adapted from Tara Thean, “Remember That?
No You Don’t. Study Shows False Memories Afflict Us All.”
©2013 by Time, Inc.
</p>
<p>
The phenomenon of false memories is common
to everybody—the party you’re certain you attended
in high school, say, when you were actually home
with the flu, but so many people have told you about
it over the years that it’s made its way into your own
memory cache. False memories can sometimes be a
mere curiosity, but other times they have real
implications. Innocent people have gone to jail when
well-intentioned eyewitnesses testify to events that
actually unfolded an entirely different way
</p>
<p>
What’s long been a puzzle to memory scientists is
whether some people may be more susceptible to
false memories than others—and, by extension,
whether some people with exceptionally good
memories may be immune to them. A new study in
the Proceedings of the National Academy of Sciences
answers both questions with a decisive no. False
memories afflict everyone—even people with the best
memories of all.
</p>
<p>
To conduct the study, a team led by psychologist
Lawrence Patihis of the University of California,
Irvine, recruited a sample group of people all of
approximately the same age and divided them into
two subgroups: those with ordinary memory and
those with what is known as highly superior
autobiographical memory (HSAM). You’ve met
people like that before, and they can be downright
eerie. They’re the ones who can tell you the exact
date on which particular events happened—whether
in their own lives or in the news—as well as all
manner of minute additional details surrounding the
event that most people would forget the second they
happened.
</p>
<p>
The scientists showed participants word lists, then
removed the lists and tested the subjects on words
that had and hadn’t been included. Each list invoked
a so-called critical lure—a word commonly
associated with the words on the list, but that did not
actually appear on the list. The word sleep, for
example, might be falsely remembered as appearing
on a list that included the words pillow, duvet and
nap. All of the participants in both groups fell for the
lures, with at least eight such errors per person—
though some tallied as many as 20. Both groups also performed unreliably when shown photographs and
fed information intended to make them think they’d
seen details in the pictures they hadn’t. Here too, the
HSAM subjects cooked up as many fake images as
the ordinary folks.

</p>

<p>
“What I love about the study is how it
communicates something that memory-distortion
researchers have suspected for some time, that
perhaps no one is immune to memory distortion,”
said Patihis.
</p>
<p>
What the study doesn’t do, Patihis admits, is
explain why HSAM people exist at all. Their
prodigious recall is a matter of scientific fact, and one
of the goals of the new work was to see if an innate
resistance to manufactured memories might be one
of the reasons. But on that score, the researchers
came up empty
</p>
<p>
“It rules something out,” Patihis said. “[HSAM
    individuals] probably reconstruct memories in the
    same way that ordinary people do. So now we have to
    think about how else we could explain it.” He and
    others will continue to look for that secret sauce that
    elevates superior recall over the ordinary kind. But
    for now, memory still appears to be fragile, malleable
    and prone to errors—for all of us.
</p>
<div class="row">
<div class="col-lg-6 col-md-6 col-sm-12"> <img style="width:100%;height:100%" src="assets/sat diagnostics/sec1-fig1.png" alt="" srcset=""></div>
<div class="col-lg-6 col-md-6 col-sm-12"> <img style="width:100%;height:100%" src="assets/sat diagnostics/sec1-fig2.png" alt="" srcset=""></div>

</div>
</div>
  <div class="col-lg-5 col-md-8 col-sm-12">
    

<div class="question">
    <h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">11</span> </h5>
  <p>As used in line 7, “curiosity” most nearly means</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;">concern.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;">question.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;">oddity</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;">wonder.</p> </label><br>

<br></div>


    
  <div class="question">  <h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">12</span> </h5>
  <p>Which statement about false memories can
  reasonably be inferred from the passage?</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;"> They can interfere with a person’s deductive
  reasoning ability.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;">They correlate with attempts to remember large
  amounts of information.
</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;">They are more commonly associated with events
  in the distant rather than the recent past.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;">They can have consequences that are genuinely
  damaging.</p> </label><br><br></div>
  
  

   
    <div class="question"> <h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">13</span> </h5>
  <p>Which choice provides the best evidence for the
  answer to the previous question?</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;">Lines 1-6 (“The phenomenon... cache”)</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;"> Lines 6-8 (“False... implications”)
</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;"> Lines 8-10 (“Innocent... way”)
  </p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;">Lines 17-19 (“False... all”)</p> </label><br><br></div>
  


<div class="question"><h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">14</span> </h5>
  <p>As used in line 28, “exact” most nearly means</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;">precise.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;">rigorous
</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;">honest</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;">distinct</p> </label><br><br></div>

</div>
<hr style="padding-bottom: 10px;">
<div class="row" >
  <div class="col-lg-6 col-md-6 col-sm-12">
    <div class="question"><h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">15</span> </h5>
  <p>According to the passage, one characteristic of the
  word lists used in the study was that each list
</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;"> appeared in conjunction with related visual
  images.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;">consisted of words intended to evoke emotional
  reactions.
</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;">included words related to a central theme or
  topic.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;">made use of relatively straightforward words.</p> </label><br><br></div>
 

 
      <div class="question"><h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">16</span> </h5>
  <p>Which statement about the study led by Patihis can
  reasonably be inferred from the passage?
</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;">Its overall goal has been questioned by several
  researchers.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;">Its main finding was not a surprise to certain
  scientists.
</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;"> Its methodology is thought to be highly
  innovative.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;">  It provided a definitive resolution to an ongoing
  debate</p> </label><br><br></div>
 
  

   <div class="question"> <h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">17</span> </h5>
  <p>Which choice provides the best evidence for the
  answer to the previous question?
</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;">Lines 50-54 (“What... Patihis”)</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;"> Lines 55-56 (“What... all”).
</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;"> Lines 56-60 (“Their... reasons”).</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;">Lines 62-65 (“It rules... explain it”).</p> </label><br><br></div>
  </div>
   <div class="col-lg-6 col-md-6 col-sm-12">
  
  <div class="question"> <h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">18</span> </h5>
  <p>What claim about the participants’ recall of included
  words is supported by figure 1?
</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;">The mean proportion of indications of
  recognition of included words was over 0.8 in
  the HSAM group and about 0.7 in the ordinary
  memory group.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;">The mean proportion of indications of
  recognition of included words was over 0.7 in
  the HSAM group and between 0.6 and 0.7 in the
  ordinary memory group.
</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;"> There was no difference between the HSAM
  group and the ordinary memory group.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;">The ordinary memory group recalled more
  included words than did the HSAM group.</p> </label><br><br></div>
  
  <div class="question"><h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">19</span> </h5>
  <p>Figure 1 and figure 2 together support which
  conclusion about the study subjects with ordinary
  memory?
</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;">  They often recalled words that neither were
  included on the list nor were critical lures.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;">They were allowed more time to complete the
  test than were the study subjects with HSAM.
</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;">They recalled a greater proportion of critical
  lures than included words, on average.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;">They confused critical lures for included words
  approximately 50 percent of the time, on
  average.
</p> </label><br><br></div>

  <div class="question"><h5 style="background-color: gray;color:white;"><span style="background-color: black; padding:0 10px">20</span> </h5>
  <p>
  Figure 2 and the passage both support which
  assertion about people with HSAM?
</p>
  <input  type="checkbox" name="" id="sec1-1-a"><label for=""><p style="padding: 0 10px;"> They are characterized by an exceptional ability
  to recall minute details of daily events.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-b"><label for=""><p style="padding: 0 10px;"> They are almost as susceptible to verbal lures as
  they are to visual lures.
</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-c"><label for=""><p style="padding: 0 10px;">They are more skilled than people with ordinary
  memory in distinguishing false memories from
  true memories.</p> </label><br>
  <input  type="checkbox" name="" id="sec1-1-d"><label for=""><p style="padding: 0 10px;"> They are about as susceptible to memory
  distortion as are people with ordinary memory.</p> </label><br><br></div>
  
   </div>

   <div class="row">
    <div class="col-lg-10 col-md-8 col-sm-12"></div>
  <div class="col-lg-2 col-md4 col-sm-12">
<a href="#" id="nxt-pg" class="get-started-btn">Next Page</a></div> 
   </div>
  
  
  </div>`
  );
  landing.scrollIntoView({ behavior: "smooth" });
});
