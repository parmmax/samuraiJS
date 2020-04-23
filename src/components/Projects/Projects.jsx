import React from 'react';
import classes from './Projects.module.css';

const Projects = (props) => {
    return (
        <section className={classes.projectWrap}>
            <h3 className={classes.titleProjects}>Projects</h3>
            <div className={classes.items}>
                <div className={classes.item}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi beatae distinctio ea enim eos exercitationem facilis id labore nulla numquam repellendus repudiandae tempora tenetur voluptas voluptatibus, voluptatum? Aut commodi delectus distinctio doloremque, ea eaque eos est fugiat fugit illo iure nobis non nulla quidem totam voluptas voluptatibus. Animi, molestiae!</p>
                </div>
                <div className={classes.item}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aspernatur dignissimos dolore doloremque ipsum labore laboriosam ratione? Culpa cupiditate deleniti esse facilis iste tempore. Molestias, perspiciatis, sit? Aliquam aut ipsum quaerat. Ad adipisci consectetur dolor dolorem est facere, laudantium magni minima, nam natus, nemo perspiciatis rerum sint soluta voluptatibus!</p>
                </div>
                <div className={classes.item}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, debitis dolores eius exercitationem facilis itaque rem tempora unde voluptas. At itaque, labore nam nisi nostrum omnis placeat possimus repellat repellendus, sequi unde vitae voluptas? Animi culpa dicta, distinctio dolorem esse facere hic inventore maxime, molestiae quas rem sapiente sequi?</p>
                </div>
            </div>
        </section>
    )
};

export default Projects