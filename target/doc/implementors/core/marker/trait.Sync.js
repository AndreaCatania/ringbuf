(function() {var implementors = {};
implementors["ringbuf"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"ringbuf/struct.RingBuffer.html\" title=\"struct ringbuf::RingBuffer\">RingBuffer</a>&lt;T&gt;",synthetic:true,types:["ringbuf::RingBuffer"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"ringbuf/struct.Producer.html\" title=\"struct ringbuf::Producer\">Producer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["ringbuf::Producer"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"ringbuf/struct.Consumer.html\" title=\"struct ringbuf::Consumer\">Consumer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["ringbuf::Consumer"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"ringbuf/enum.PushAccessError.html\" title=\"enum ringbuf::PushAccessError\">PushAccessError</a>",synthetic:true,types:["ringbuf::PushAccessError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"ringbuf/enum.PopAccessError.html\" title=\"enum ringbuf::PopAccessError\">PopAccessError</a>",synthetic:true,types:["ringbuf::PopAccessError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"ringbuf/enum.PushError.html\" title=\"enum ringbuf::PushError\">PushError</a>",synthetic:true,types:["ringbuf::PushError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"ringbuf/enum.PopError.html\" title=\"enum ringbuf::PopError\">PopError</a>",synthetic:true,types:["ringbuf::PopError"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
