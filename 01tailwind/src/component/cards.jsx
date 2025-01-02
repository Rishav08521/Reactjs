import React from 'react'

function cards({username}) {
  console.log(username );
  return (
    <figure class="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/29829694/pexels-photo-29829694/free-photo-of-romantic-wedding-couple-with-umbrella-and-bougainvillea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="84" height="12"/>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    
  )
}

export default cards
