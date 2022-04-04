
        // IsInView FUNCTION, root
        const r = document.querySelector(':root')
        // HERO: H1
        const hero_text_h1 = document.querySelector('.hero-text h1');
        hero_text_h1.innerHTML = hero_text_h1.innerHTML.replace(/./g, "<span>$&</span>")
        
        const hero_text_h1_span = document.querySelectorAll('.hero-text > h1 span')
        hero_text_h1_span.forEach((letter, index) => {
            setTimeout(() => {
            letter.style.transform = "unset";
            if (index > 7) {
                letter.style.color = "var(--signatureGreen)"
            }
            }, (index+5)*35);
        })
        
        // HERO: INTRO
        const hero = document.querySelector('.hero');
        const hero_text = document.querySelector('.hero-text')
        function heroIntro () {
            hero_text.style.transform = `translateX(${.5*(hero.getBoundingClientRect().width-hero_text_h1.getBoundingClientRect().width)-25}px)`
        };
        heroIntro();
        window.addEventListener('resize', heroIntro)
        setTimeout(() => {
            window.removeEventListener('resize', heroIntro)
            hero_text.style.transition = '1s'
            hero_text.style.transform = 'unset'
        }, 1430);
        
        // SCROLL: ABOUT, STORY
        const about = document.querySelector('.about')
        const story = document.querySelector('.story')
        const story_last_child = document.querySelector('.story_last_child')
        const story_h1 = document.querySelector('.story > h1')
        window.addEventListener('scroll', () => {
            if (IsInView(story)) {
            story.classList.add('in-view')
            r.style.setProperty('--storyVertical', `${-1*story.getBoundingClientRect().top + .5*window.innerHeight}px`)
            r.style.setProperty('--storyVerticalMax', `${story_last_child.getBoundingClientRect().top - story_h1.getBoundingClientRect().bottom}px`)
            }
            if (IsInView(about)) {
            about.style.transform = 'unset'
            about.style.opacity = '1'
            }
        })