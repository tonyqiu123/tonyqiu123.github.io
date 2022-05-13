




// HERO: H1
const hero_text_h1 = document.querySelector('.hero-text h1')
hero_text_h1.innerHTML = hero_text_h1.innerHTML.replace(/./g, "<span>$&</span>")
characterEffect(document.querySelectorAll('.hero-text > h1 span'))

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
// const about_h1 = document.querySelector('.about > h1')
// about_h1.innerHTML = about_h1.innerHTML.replace(/./g, "<span>$&</span>")
const story = document.querySelector('.story')
const story_nodes = document.querySelectorAll('.story-segment-left > div')
const story_segments = document.querySelectorAll('.story-segment')
const story_h1 = document.querySelector('.story > h1')
// story_h1.innerHTML = story_h1.innerHTML.replace(/./g, "<span>$&</span>")
let storyVerticalJSos
window.addEventListener('scroll', () => {
    if (IsInView(story)) {
        story.classList.add('in-view')
        storyVerticalJS = -1*story.getBoundingClientRect().top + .4*window.innerHeight
        r.style.setProperty('--storyVertical', `${storyVerticalJS}px`)
        r.style.setProperty('--storyVerticalMax', `${story_nodes[story_nodes.length-1].getBoundingClientRect().top - story_h1.getBoundingClientRect().bottom}px`)
        story_nodes.forEach((node, index) => {
            storyVerticalJS + 155 + story.getBoundingClientRect().top > node.getBoundingClientRect().top ? story_segments[index].classList.add("activated") : story_segments[index].classList.remove("activated")
        })
    }
    // if (IsInView(about_h1))
    //     characterEffect(document.querySelectorAll('.about > h1 span'))
    // if (IsInView(story_h1))
    //     characterEffect(document.querySelectorAll('.story > h1 span'))
})

const test = `${process.env.test}`
console.log(test)