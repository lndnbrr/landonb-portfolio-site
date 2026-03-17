import Image from "next/image";

export default function VolunteerWork () {
  return (
    <>
    <section id="volunteerwork">
      <div>
        <h1>This is Ronald McDonald House Charities</h1>
        <h3>I had the privilege of being a part of the team Ronald McDonald House Charities Detroit for a little over a year and a half. After my graduation from Michigan State University, I wanted a deeper understanding of what and who I wanted to work for, and this opportunity to volunteer happened to land in my lap that very Summer! It was my first time seeing how a non-profit works internally, and seeing our impact was so gratifying to me. Seeing how other people share their care through gifting toys for the children during Christmas, meals for the families staying at the House, or equipment donated to the House by global businesses, being proud of what I was apart of is an understatement. </h3>
        <h3>As I continued to volunteer at the House, I wanted to level up onto that next step in this chapter. This lead me to joining the Associate Board at the time, a young group of motivated individuals who spent their spare time helping the House in any way they can. We coordinated monthly meetings, established quarterly fundraising events, and just had a ton of fun in the process! I was later voted in as the volunteering chair and fundraising chair, a dual-led role that gave me the responsibility of reaching out to members with volunteering opportunities, keeping logs of funds raised and hours volunteered, and so on.</h3>
        <h3>If someone were to ask me what I missed most about the House, I cannot just think of one thing. I had a ball making meals with a team for the residents at the House and seeing people&apos;s faces light up when they had a freshly made meal. I felt like family when I sat in the common area to speak with residents and shared cuisine from their backgrounds. I took pride in telling people during House tours about how we have a playroom that was completely donated by the Detroit Red Wings and how we have 28 rooms for families with a little one receiving care in the local hospital. It warmed my heart to high-five
        a kid who is heading home after their sibling had a successful procedure. You can see why it is hard to choose!</h3>
        <h3>Here are some more metrics from my time at RMHC Detroit:</h3>
        <ol>
          <li>Conducted over 45 successful corporate outreaches to identify and secure partnerships, sponsorships, and merchandise/monetary donations for RMHC events.</li>
          <li>Created 100+ volunteer opportunities for the Associate Board and all supporters of the House through the garden, meal programs, and other event initiatives. </li>
          <li>Dedicated 30+ cumulative hours of volunteering and funded over $1,000 of personal and encouraged donations.</li>
          <li>Led and participated in events that raised thousands of dollars such as <i>Spare The Love</i> at Bowlero Royal Oak.</li>
        </ol>
        <Image 
        src={"/images/RMHCCHGroup.jpg"}
        alt="RMHCD at MI Children's Hospital"
        width={400}
        height={300}
        />
        <Image 
        src={"/images/RMHCGardening.jpg"}
        alt="RMHCD Gardening"
        width={250}
        height={250}
        />
        <Image 
        src={"/images/SpareTheLove2023.jpg"}
        alt="Spare The Love Event Flyer"
        width={400}
        height={300}
        />
      </div>
      <div>
        <h1>This is Encavi</h1>
        <h3>During my sophomore year of college, a group of students and I all attended a study abroad to Merida, MX. We spent seven days helping out various communities of the city, where my subgroup specifically volunteered at a local therapeutic center called &quot;Encavi&quot;. At Encavi, I helped with their daily mission of providing quality care to patients who were on the spectrum or patients who had physical disabilities.</h3>
        <h3>Every day when I arrived at the center, I was greeted with the sounds of the patients interacting with one another and the sights of learning circles and individual one-on-one care with specific patients. Although I was one of the students who was not fluent in Spanish, I still felt welcomed like family. Nonetheless, that gave me more reason to dig deeper and try to offer any support or positive energy that I can through  means other than language.</h3>
        <h3>A memory that will always be tied to that center for me was the day that I was doing one-on-one care with a young man who was on the spectrum. The patient had a task to place shapes in the corresponding space, a fine motor skill exercise that helps development with hand-eye coordination and goal consistency. Since I was not able to explain in Spanish, I resorted to my demonstration of the task when necessary, but what carried me more were my animated gestures and positive expressions. When I was congratulating him, I wanted this guy to feel his progress, so every time he got it right, I would celebrate his progress as loudly as I could. I would talk to him just like I would with my friends back home, even if he didn&apos;t understand. I would give him handshakes, and he would give me hugs every time he did well. Seeing him progress and reciprocate that energy back felt like our city just won a championship. The service learning coordinator told me that, for the time that he has attended therapy, she has never seen him that excited or invested like he was for our one-to-one. That is the memory I carry with me from Encavi.</h3>
        <h3>Here are some of the things I did during my time at Encavi:</h3>

        <ol>
          <li>Assisted with physical therapy through gross motor skills such as assisted yoga stretching, soccer, and basketball.</li>
          <li>Provided autism-oriented care through developmental goal progression and a reward/reinforcement system for behavior.</li>
          <li>Supported staff with reading/speech focus practices such as vocabulary and read-aloud exercises.</li>
        </ol>
        <Image
        src={"/images/EncaviMSUGroup.JPG"}
        alt="MSU Group at Encavi"
        width={400}
        height={300}/>
      </div>
    </section>
    </>
  );
};
