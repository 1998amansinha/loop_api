import React from "react";

const Promise = () => {
  return (
    <div className="flex flex-col items-center py-10 mx-auto  bg-cover min-h-screen">
      <div className="max-w-3xl font-serif">
        <h1 className="text-5xl font-bold my-8">
          How to use the Fetch API with async/await
        </h1>
        <p className="my-6 text-xl">
          When writing JavaScript, we often have to deal with tasks that rely on
          other tasks! Let’s say that we want to get an image, compress it,
          apply a filter, and save it 📸
        </p>
        <p className="my-6 text-xl">
          The very first thing we need to do, is get the image that we want to
          edit. A getImage function can take care of this! Only once that image
          has been loaded successfully, we can pass that value to a resizeImage
          function. When the image has been resized successfully, we want to
          apply a filter to the image in the applyFilter function. After the
          image has been compressed and we've added a filter, we want to save
          the image and let the user know that everything worked correctly! 🥳
        </p>
        <p className="my-6 text-xl">
          In the end, we’ll end up with something like this:
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740279329/await1_h4d0q8.webp"
          alt="1"
        />
        <p className="my-6 text-xl">
          Hmm… Notice anything here? Although it’s… fine, it’s not great. We end
          up with many nested callback functions that are dependent on the
          previous callback function. This is often referred to as a callback
          hell, as we end up with tons of nested callback functions that make
          the code quite difficult to read!
        </p>
        <p className="my-6 text-xl">
          Luckily, we now got something called promises to help us out! Let’s
          take a look at what promises are, and how they can help us in
          situations like these! 😃
        </p>
        <p className="text-2xl text-center ">. . .</p>
        <h2 className="text-5xl font-bold my-8">Promise Syntax</h2>
        <p className="my-6 text-xl">
          ES6 introduced Promises. In many tutorials, you’ll read something
          like:
        </p>
        <p className="my-6 text-xl">
          “A promise is a placeholder for a value that can either resolve or
          reject at some time in the future”
        </p>
        <p className="my-6 text-xl">
          Yeah… That explanation never made things clearer for me. In fact it
          only made me feel like a Promise was a weird, vague, unpredictable
          piece of magic. So let’s look at what promises really are.
        </p>
        <p className="my-6 text-xl">
          We can create a promise, using a Promise constructor that receives a
          callback. Okay cool, let's try it out!
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315303/await2_uhjc0i.gif"
          className="p-2"
          alt="2"
        />
        <p className="my-6 text-xl">Wait woah, what just got returned? 🤯</p>
        <p className="my-6 text-xl">
          A Promise is an object that contains a status, ([[PromiseStatus]]) and
          a value ([[PromiseValue]]). In the above example, you can see that the
          value of [[PromiseStatus]] is "pending", and the value of the promise
          is undefined.
        </p>
        <p className="my-6 text-xl">
          Don’t worry — you’ll never have to interact with this object, you
          can’t even access the [[PromiseStatus]] and [[PromiseValue]]
          properties! However, the values of these properties are important when
          working with promises.
        </p>
        <p className="text-3xl text-center">.. .. ..</p>
        <p className="my-6 text-xl">
          The value of the PromiseStatus, the state, can be one of three values:
        </p>
        <p className="my-6 text-xl">
          1. ✅ fulfilled: The promise has been resolved. Everything went fine,
          no errors occurred within the promise 🥳
        </p>
        <p className="my-6 text-xl">
          2. ❌ rejected : The promise has been rejected. Argh, something went
          wrong..
        </p>
        <p className="my-6 text-xl">
          3. ⏳ pending: The promise has neither resolved nor rejected (yet),
          the promise is still pending.
        </p>
        <p className="my-6 text-xl">
          Alright this all sounds great, but when is a promise status "pending",
          "fulfilled" or "rejected"? And why does that status even matter?
        </p>
        <p className="my-6 text-xl">
          {`In the above example, we just passed the simple callback function ()
          => {} to the Promise constructor. However, this callback function
          actually receives two arguments. The value of the first argument,
          often called resolve or res, is the method to be called when the
          Promise should resolve. The value of the second argument, often called
          reject or rej, is the value method to be called when the Promise
          should reject, something went wrong.`}
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315300/await3_aagxgw.webp"
          alt="3"
        />
        <p className="my-6 text-xl">
          Let’s try and see that gets logged when we invoke either the resolve
          or reject method! In my example, I called the resolve method res, and
          the reject method rej.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315302/await4_pyqpeq.gif"
          alt="4"
        />
        <p className="my-6 text-xl">
          Awesome! We finally know how to get rid of the "pending" status and
          the undefined value! The status of a promise is "fulfilled" if we
          invoked the resolve method, and the status of the promise is
          "rejected" if we invoked the rejected method.
        </p>
        <p className="my-6 text-xl">
          The value of a promise, the value of [[PromiseValue]], is the value
          that we pass to the either the resolved or rejected method as their
          argument.
        </p>
        <p className="text-3xl text-center">.. .. ..</p>
        <p className="my-6 text-xl">
          Okay so, now we know a little better how to control that vague Promise
          object. But what is it used for?
        </p>
        <p className="my-6 text-xl">
          In the introductory section, I showed an example in which we get an
          image, compress it, apply a filer, and save it! Eventually, this ended
          up being a nested callback mess.
        </p>
        <p className="my-6 text-xl">
          Luckily, Promises can help us fix this! First, let’s rewrite the
          entire code block, so that each function returns a Promise instead.
        </p>
        <p className="my-6 text-xl">
          If the image is loaded and everything went fine, let’s resolve the
          promise with the loaded image! Else, if there was an error somewhere
          while loading the file, let’s reject the promise with the error that
          occurred.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315300/await5_i9opr4.webp"
          alt="5"
        />
        <p className="my-6 text-xl">
          Let’s see what happens when we run this in the terminal!
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315299/await6_sx34n9.gif"
          alt="6"
        />
        <p className="my-6 text-xl">
          Cool! A promise got returned with the value of the parsed data, just
          like we expected.
        </p>
        <p className="my-6 text-xl">
          But… what now? We don’t care about that entire promise object, we only
          care about the value of the data! Luckily, there are built-in methods
          to get a promise’s value. To a promise, we can attach 3 methods:
        </p>
        <p className="my-6 text-xl">
          1. .then(): Gets called after a promise resolved.
        </p>
        <p className="my-6 text-xl">
          2. .catch(): Gets called after a promise rejected.
        </p>
        <p className="my-6 text-xl">
          3. .finally(): Always gets called, whether the promise resolved or
          rejected.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315296/await7_fpxbfj.webp"
          alt="7"
        />
        <p className="my-6 text-xl">
          The .then method receives the value passed to the resolve method.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315297/await8_hlqxvs.gif"
          className="p-2"
          alt="8"
        />
        <p className="my-6 text-xl">
          The .catch method receives the value passed to the rejected method
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315297/await9_c9i8s3.gif"
          alt="9"
        />
        <p className="my-6 text-xl">
          Finally, we have the value that got resolved by the promise without
          having that entire promise object! We can now do whatever we want with
          this value.
        </p>
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          FYI, when you know that a promise will always resolve or always
          reject, you can write Promise.resolve or Promise.reject , with the
          value you want to reject or resolve the promise with!
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315295/await10_fvgdy9.webp"
          alt="10"
        />
        <p className="my-6 text-xl">
          You’ll often see this syntax in the following examples 😄
        </p>
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          In the getImage example, we ended up having to nest multiple callbacks
          in order to run them. Luckily, the .then handlers can help us with
          that! 🥳
        </p>
        <p className="my-6 text-xl">
          The result of the .then itself is a promise value. This means that we
          can chain as many .thens as we want: the result of the previous then
          callback will be passed as an argument to the next then callback!
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315295/await11_epdkvy.webp"
          alt="11"
        />
        <p className="my-6 text-xl">
          In the case of the getImage example, we can chain multiple then
          callbacks in order to pass the processed image onto the next function!
          Instead of ending up with many nested callbacks, we get a clean then
          chain.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315294/await12_pbhxw4.webp"
          alt="12"
        />
        <p className="my-6 text-xl">
          Perfect! This syntax already looks way better than the nested
          callbacks.
        </p>
        <p className="text-center text-3xl">.. .. ..</p>
        <h2 className="text-4xl font-bold my-8">Microtasks and (Macro)tasks</h2>
        <p className="my-6 text-xl">
          Okay so we know a little better how to create a promise and how to
          extract values out of a promise. Let’s add some more code to the
          script, and run it again:
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315295/await13_or7twd.gif"
          alt="13"
        />
        <p className="my-6 text-xl">Wait what?! 🤯</p>
        <p className="my-6 text-xl">
          First, Start! got logged. Okay we could've seen that one coming:
          console.log('Start!') is on the very first line! However, the second
          value that got logged was End!, and not the value of the resolved
          promise! Only after End! was logged, the value of the promise got
          logged. What's going on here?
        </p>
        <p className="my-6 text-xl">
          We’ve finally seen the true power of promises! 🚀 Although JavaScript
          is single-threaded, we can add asynchronous behavior using a Promise!
        </p>
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          But wait, haven’t we seen that before? 🤔 In the JavaScript event
          loop, can’t we also use methods native to the browser such as
          setTimeout to create some sort of asynchronous behavior?
        </p>
        <p className="my-6 text-xl">
          Yes! Hoewver, within the Event Loop, there are actually two types of
          queues: the (macro)task queue (or just called the task queue), and the
          microtask queue. The (macro)task queue is for (macro)tasks and the
          microtask queue is for microtasks.
        </p>
        <p className="my-6 text-xl">
          So what’s a (macro)task and what’s a microtask? Although there are a
          few more than I’ll cover here, the most common are shown in the table
          below!
        </p>
        <p className="my-6 text-xl">
          (Macro)task: setTimeout | setInterval Microtask: process.nextTick |
          Promise callback | queueMicrotask
        </p>
        <p className="my-6 text-xl">
          Ahh, we see Promise in the microtask list! 😃 When a Promise resolves
          and calls its then(), catch() or finally(), method, the callback
          within the method gets added to the microtask queue! This means that
          the callback within the then(), catch() or finally() method isn't
          executed immediately, essentially adding some async behavior to our
          JavaScript code!
        </p>
        <p className="my-6 text-xl">
          So when is a then(), catch() or finally() callback executed? The event
          loop gives a different priority to the tasks:
        </p>
        <p className="my-6 text-xl">
          1. All functions in that are currently in the call stack get executed.
          When they returned a value, they get popped off the stack.
        </p>
        <p className="my-6 text-xl">
          2. When the call stack is empty, all queued up microtasks are popped
          onto the callstack one by one, and get executed! (Microtasks
          themselves can also return new microtasks, effectively creating an
          infinite microtask loop 😬)
        </p>
        <p className="my-6 text-xl">
          3. If both the call stack and microtask queue are empty, the event
          loop checks if there are tasks left on the (macro)task queue. The
          tasks get popped onto the callstack, executed, and popped off!
        </p>
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          Let’s take a look at a quick example, simply using:
        </p>
        <p className="my-6 text-xl">
          1. Task1: a function that's added to the call stack immediately, for
          example by invoking it instantly in our code.
        </p>
        <p className="my-6 text-xl">
          2. Task2, Task3, Task4: microtasks, for example a promise then
          callback, or a task added with queueMicrotask.
        </p>
        <p className="my-6 text-xl">
          3. Task5, Task6: a (macro)task, for example a setTimeout or
          setImmediate callback
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315302/await14_kmjydm.gif"
          alt="14"
        />
        <p className="my-6 text-xl">
          First, Task1 returned a value and got popped off the call stack. Then,
          the engine checked for tasks queued in the microtask queue. Once all
          the tasks were put on the call stack and eventually popped off, the
          engine checked for tasks on the (macro)task queue, which got popped
          onto the call stack, and popped off when they returned a value.
        </p>
        <p className="my-6 text-xl">
          Okay okay enough pink boxes. Let’s use it with some real code!
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315294/await15_ydc3qf.webp"
          alt="15"
        />
        In this code, we have the macro task setTimeout, and the microtask
        promise then() callback. Once the engine reaches the line of the
        setTimeout function. Let's run this code step-by-step, and see what gets
        logged!
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          Quick FYI — in the following examples I’m showing methods like
          console.log, setTimeout and Promise.resolve being added to the call
          stack. They're internal methods and actually don't appear in stack
          traces - so don't worry if you're using the debugger and you don't see
          them anywhere! It just makes explaining this concept easier without
          adding a bunch of boilerplate code 🙂
        </p>
        <p className="my-6 text-xl">
          On the first line, the engine encounters the console.log() method. It
          gets added to the call stack, after which it logs the value Start! to
          the console. The method gets popped off the call stack, and the engine
          continues.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315294/await16_hnupi1.gif"
          alt="16"
        />
        <p className="my-6 text-xl">{`The engine encounters the setTimeout method, which gets popped on to the call stack. The setTimeout method is native to the browser: its callback function (() => console.log('In timeout')) will get added to the Web API, until the timer is done. Although we provided the value 0 for the timer, the call back still gets pushed to the Web API first, after which it gets added to the (macro)task queue: setTimeout is a macro task!`}</p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315293/await17_wd0tbm.gif"
          alt="17"
        />
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          The engine encounters the Promise.resolve() method. The
          Promise.resolve() method gets added to the call stack, after which is
          resolves with the value Promise!. Its callback function, the then()
          method in this case, gets added to the microtask queue.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315292/await18_kruwv5.gif"
          alt="18"
        />
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          The engine encounters the console.log() method. It gets added to the
          call stack immediately, after which it logs the value End! to the
          console, gets popped off the call stack, and the engine continues.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315286/await19_mveeyw.gif"
          alt="19"
        />
        <p className="my-6 text-xl">
          The engine sees the callstack is empty now. Since the call stack is
          empty, it’s going to check whether there are queued tasks in the
          microtask queue! And yes there are, the promise then callback is
          waiting for its turn! It gets popped onto the call stack, after which
          it logs the resolved value of the promise: the string Promise!in this
          case.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315287/await20_josqu1.gif"
          alt="20"
        />
        <p className="my-6 text-xl">
          The engine sees the call stack is empty, so it’s going to check the
          microtask queue once again to see if tasks are queued. Nope, the
          microqueue is all empty.
        </p>
        <p className="my-6 text-xl">
          It’s time to check the (macro)task queue: the setTimeout callback is
          still waiting there! The setTimeout callback gets popped on to the
          callstack. The callback function returns the console.log method, which
          logs the string "In timeout!". The setTimeout callback get popped off
          the callstack.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315302/await21_jbnxb9.gif"
          alt="21"
        />
        Finally, all done! 🥳 It seems like the output we saw earlier wasn’t so
        unexpected after all.
        <p className="text-center text-3xl">.. .. ..</p>
        <h2 className="text-4xl font-bold my-8">Async/Await</h2>
        <p className="my-6 text-xl">
          ES7 introduced a new way to add async behavior in JavaScript and make
          working with promises easier! With the introduction of the async and
          await keywords, we can create async functions that implicitly return a
          promise. But.. how can we do that? 😮
        </p>
        <p className="my-6 text-xl">
          {`Previously, we saw that we can explicitly create promises using the
          Promise object, whether it was by typing new Promise(() => {}),
          Promise.resolve, or Promise.reject.`}
        </p>
        <p className="my-6 text-xl">
          Instead of explicitly using the Promise object, we can now create
          asynchronous functions that implicitly return an object! This means
          that we no longer have to write any Promise object ourselves.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315288/await22_mljyfo.webp"
          alt="22"
        />
        <p className="my-6 text-xl">
          Although the fact that async functions implicitly return promises is
          pretty great, the real power of async functions can be seen when using
          the await keyword! With the await keyword, we can suspend the
          asynchronous function while we wait for the awaited value return a
          resolved promise. If we want to get the value of this resolved
          promise, like we previously did with the then() callback, we can
          assign variables to the awaited promise value!
        </p>
        <p className="my-6 text-xl">
          So, we can suspend an async function? Okay great but.. what does that
          even mean?
        </p>
        <p className="my-6 text-xl">
          Let’s see what happens when we run the following block of code:
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315287/await23_rcdscm.gif"
          alt="23"
        />
        <p className="my-6 text-xl">Hmm.. What’s happening here?</p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315290/await24_uteikk.gif"
          alt="24"
        />
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          First, the engine encounters a console.log. It gets popped onto the
          call stack, after which Before function! gets logged.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315294/await25_jyunbi.gif"
          alt="25"
        />
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          Then, we invoke the async function myFunc(), after which the function
          body of myFunc runs. On the very first line within the function body,
          we call another console.log, this time with the string In function!.
          The console.log gets added to the call stack, logs the value, and gets
          popped off.
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315292/await26_vwbizl.gif"
          alt="26"
        />
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          The function body keeps on being executed, which gets us to the second
          line. Finally, we see an await keyword! 🎉
        </p>
        <p className="my-6 text-xl">
          The first thing that happens is that the value that gets awaited gets
          executed: the function one in this case. It gets popped onto the call
          stack, and eventually returns a resolved promise. Once the promise has
          resolved and one returned a value, the engine encounters the await
          keyword.
        </p>
        <p className="my-6 text-xl">
          When encountering an await keyword, the async function gets suspended.
          ✋🏼 The execution of the function body gets paused, and the rest of the
          async function gets run in a microtask instead of a regular task!
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315292/await27_ynb1g0.gif"
          alt="27"
        />
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          Now that the async function myFunc is suspended as it encountered the
          await keyword, the engine jumps out of the async function and
          continues executing the code in the execution context in which the
          async function got called: the global execution context in this case!
          🏃🏽‍♀️
        </p>
        <img
          src="https://res.cloudinary.com/do5xzpecm/image/upload/v1740315286/await28_uxsdcp.gif"
          alt="28"
        />
        <p className="text-center text-3xl">.. .. ..</p>
        <p className="my-6 text-xl">
          Finally, there are no more tasks to run in the global execution
          context! The event loop checks to see if there are any microtasks
          queued up: and there are! The async myFunc function is queued up after
          resolving the valued of one. myFunc gets popped back onto the call
          stack, and continues running where it previously left off.
        </p>
        <p className="my-6 text-xl">
          The variable res finally gets its value, namely the value of the
          resolved promise that one returned! We invoke console.log with the
          value of res: the string One! in this case. One! gets logged to the
          console and gets popped off the call stack! 😊
        </p>
        <p className="my-6 text-xl">
          Finally, all done! Did you notice how async functions are different
          compared to a promise then? The await keyword suspends the async
          function, whereas the Promise body would've kept on being executed if
          we would've used then!
        </p>
      </div>
    </div>
  );
};

export default Promise;
