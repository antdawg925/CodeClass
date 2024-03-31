import React from 'react';
import { useNavigate } from 'react-router-dom';

const TuitionInfo = () => {
    const Navigate = useNavigate();
    return (
        <div className="scroll_info text-center" data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" tabIndex="0" style={{ marginBottom: "2rem" }}>
            <div className='bg-secondary box_limiter' style={{ width: "50vw", minHeight: "fit-content", minWidth: "60vw" }}>
                <h2 id="simple-list-item-1" className="text-info mt-4">Let's Build A Web App!</h2>
                <div className="box_border apply_boxes">
                    <h5>Weekly Web Development</h5>
                    <p>
                        6-week course <br />
                        Monday or Wednesday <br />
                        6:00pm -7:00pm PST <br />
                        <hr />
                        Or Saturday<br />
                        9:00am - 10:00pm PST
                    </p>
                    <button className="rounded bg-danger w-100" onClick={() => Navigate("/apply")}>Apply</button>
                </div>
                <p>
                    Embark on a transformative journey in our 6-week web development course where you'll delve deep into the art of crafting dynamic web pages. Through hands-on exercises and immersive learning experiences, you'll master the essentials of HTML and CSS, the fundamental building blocks of the web.
                    Discover the thrill of bringing your ideas to life as you watch your creations materialize before your eyes. With every line of code you write, you'll be shaping the digital landscape, and with every web page you design, you'll be empowering your children to explore and express themselves online. Join us on this exhilarating adventure where creativity meets technology, and let your child's imagination soar as they become the architects of their own digital universe.
                </p>
                <h3 className='text-start'>$1200</h3>
            </div >

            <div className='box_limiter' style={{ width: "50vw", minHeight: "fit-content", minWidth: "60vw" }}>
                <h2 id="simple-list-item-2" className="text-info">Full-Stack Web Applications</h2>
                <div className="box_border apply_boxes">
                    <h5>Full-Stack Starter Course </h5>
                    <p>
                        4-week course <br />
                        Tuesday/Thursday <br />
                        6:00pm - 8:00pm PST
                    </p>
                    <button className="rounded bg-danger w-100" onClick={() => Navigate("/apply")}>Apply</button>
                </div>
                <p>
                    Join us on a transformative journey into the realm of full-stack development. Our program offers a comprehensive curriculum where you'll learn to craft captivating user interfaces and architect robust backend systems. From mastering HTML, CSS, and JavaScript for front-end design to diving into Node.js and Express for backend development, you'll gain a deep understanding of the entire web development stack.

                    But it's not just about technical skills—collaborating on real-world projects and tackling complex challenges will sharpen your teamwork, communication, and critical thinking abilities. By the end of our program, you'll emerge as a well-rounded software developer, ready to tackle any coding task with confidence. Start your journey with us and unlock the door to a future brimming with opportunities in the world of software development.
                </p>
                <h3 className='text-start'>$1750</h3>
            </div>

            <div className='bg-secondary box_limiter' style={{ width: "50vw", minHeight: "fit-content", minWidth: "60vw" }}>
                <h2 id="simple-list-item-3" className="text-info">Deploying Applications to the Cloud</h2>
                <div className="box_border apply_boxes">
                    <h5>Cloud Deployment</h5>
                    <p>
                        6-week course <br />
                        Monday/Wednesday <br />
                        6:00pm - 8:00pm PST
                    </p>
                    <button className="rounded bg-danger w-100" onClick={() => Navigate("/apply")}>Apply</button>
                </div>
                <p>
                    Discover the power of taking your applications to the cloud and watch your creations reach new heights. In our program, we'll guide you through the intricacies of deploying your applications to cloud platforms, unlocking a world of scalability, reliability, and accessibility. Whether it's deploying to platforms like AWS, Google Cloud, or Azure, you'll learn to leverage cutting-edge technologies to make your applications accessible to users around the globe.

                    But the benefits extend beyond just accessibility—by mastering cloud deployment, you'll gain invaluable skills that are highly sought-after in today's tech industry. From optimizing resource allocation to ensuring seamless performance and security, understanding cloud deployment opens doors to a plethora of career opportunities. Join us on this journey and elevate your applications to new heights in the vast expanse of the cloud.
                </p>
                <h3 className='text-start'>$2400</h3>
            </div>

            <div className='box_limiter' style={{ width: "50vw", minHeight: "fit-content", minWidth: "60vw" }}>
                <h2 id="simple-list-item-4" className="text-info">Algorithm Workshops</h2>
                <div className="box_border apply_boxes">
                    <h5>Algo Training </h5>
                    <p>
                        4-week course <br />
                        Monday or Wednesday <br />
                        6:00pm -8:00pm PST <br />
                        <hr />
                        Or Saturday<br />
                        10:00am - 12:00pm PST
                    </p>
                    <button className="rounded bg-danger w-100" onClick={() => Navigate("/apply")}>Apply</button>
                </div>
                <p>
                    In our program, we recognize the paramount importance of mastering algorithms, and we're here to equip you with the skills that will set you apart in the world of software development. Our algorithm workshops provide a structured environment where you can sharpen your problem-solving abilities and tackle complex challenges with confidence. From data structures to algorithmic paradigms, our curriculum covers the essential tools and techniques that are indispensable for secondary in the tech industry.

                    By participating in our algorithm trainings, you'll not only become proficient at solving problems efficiently but also develop a mindset that thrives on tackling new and unfamiliar problems. These skills are not just about passing coding interviews; they're about cultivating a mindset of resilience and innovation that will serve you well throughout your career. Join us and gain the competitive edge you need to excel in the fast-paced world of software development.
                </p>
                <h3 className='text-start'>$800</h3>
            </div >

            <div className='bg-secondary box_limiter' style={{ width: "50vw", minHeight: "fit-content", minWidth: "60vw" }}>
                <h2 id="simple-list-item-5" className="text-info">Introduction to AI</h2>
                <div className="box_border apply_boxes">
                    <h5>AI Development</h5>
                    <p>
                        7-week course <br />
                        Monday/Wednesday <br />
                        6:30pm - 8:00pm PST <br />
                        <hr />
                        Or Saturday<br />
                        1:00pm - 3:30pm PST
                    </p>
                    <button className="rounded bg-danger w-100" onClick={() => Navigate("/apply")}>Apply</button>
                </div>
                <p>
                    Embark on an extraordinary journey with our Introduction to AI program, where your child will uncover the mysteries of artificial intelligence and emerge as a trailblazer in their school community. By enrolling in this transformative course, your child will not only gain a profound understanding of AI but also harness its potential to become a visionary leader in the digital age. Imagine the pride as your child dazzles their peers with their newfound knowledge, paving the way for innovative solutions and shaping the future of technology. Join us and watch as your child transforms into the brightest star in the classroom, armed with the knowledge and confidence to conquer the challenges of tomorrow.
                </p>
                <h3 className='text-start'>$3200</h3>
            </ div>
        </div >
    );
};

export default TuitionInfo;
