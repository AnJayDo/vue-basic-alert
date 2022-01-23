<template>
    <h1 id="vue-basic-alert">vue-basic-alert</h1>
    <p>Basic Vue Alert Component for basic use cases.</p>
    <h2 id="demo">Demo</h2>
    <p><img src="https://media3.giphy.com/media/esGefiT48Dnx947at6/giphy.gif" alt="Alt Text"></p>
    <h2 id="installation">Installation</h2>
    <p>Use the node package manager <a href="https://www.npmjs.com/package/vue-basic-alert">npm</a> to install vue-basic-alert.</p>
    <pre><code class="lang-bash">npm <span class="hljs-selector-tag">i</span> --save vue-basic-alert
    </code></pre>
    <h2 id="usage">Usage</h2>
    <p>Import Vue Basic Alert Component first.</p>
    <pre><code class="lang-javascript"><span class="hljs-keyword">import</span> VueBasicAlert <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-basic-alert'</span>

    <span class="hljs-keyword">export</span> default defineComponent({
    ...
    components: {
        VueBasicAlert
    }
    ...
    });
    </code></pre>
    <p>Add <code>&lt;vue-basic-alert ref=&quot;alert&quot; /&gt;</code> to your <code>app</code>.
    To interact with <code>vue-basic-alert</code>, you can use <code>$ref.alert</code>.</p>
    <p>There are 2 methods: <code>showAlert(alertType: string, iconSize: number, iconType: string ,alertHeader: string, alertMessage: string)</code> and <code>closeAlert()</code></p>
    <pre><code class="lang-javascript"><span class="hljs-symbol">&lt;template&gt;</span>
    &lt;div id=<span class="hljs-string">"app"</span>&gt;
        &lt;button 
            @click=<span class="hljs-comment">"</span>
            $refs.alert.showAlert(
                <span class="hljs-string">'success'</span>, // There are <span class="hljs-number">4</span> types of aler<span class="hljs-variable">t:</span> success, info, warning, error
                <span class="hljs-string">'This is the information of something you may know Success.'</span>, // Message of the alert
                <span class="hljs-string">'Success 200'</span>, // Header of the alert
                { iconSize: <span class="hljs-number">35</span>, // Size of the icon (px)
                iconType: <span class="hljs-string">'solid'</span>, // Icon style<span class="hljs-variable">s:</span> now <span class="hljs-keyword">only</span> <span class="hljs-number">2</span> styles <span class="hljs-string">'solid'</span> <span class="hljs-built_in">and</span> <span class="hljs-string">'regular'</span>
                position: <span class="hljs-string">'top right'</span> } // Position of the alert <span class="hljs-string">'top right'</span>, <span class="hljs-string">'top left'</span>, <span class="hljs-string">'bottom left'</span>, <span class="hljs-string">'bottom right'</span>
            )<span class="hljs-comment">"</span>
        &gt;
            Click <span class="hljs-keyword">to</span> Success alert
        &lt;/button&gt;

        &lt;vue-basic-alert 
        :duration=<span class="hljs-string">"300"</span> // duration of transistions (ms)
        :closeIn=<span class="hljs-string">"300"</span> // <span class="hljs-keyword">if</span> you dont have this, you can <span class="hljs-keyword">close</span> the alert manually
        ref=<span class="hljs-string">"alert"</span> /&gt;
    &lt;/div&gt;
    &lt;/template&gt;
    </code></pre>
    <p><code>vue-basic-alert</code> props:</p>
    <ul>
    <li><code>position</code>: position of the alert <code>type: String</code>, default value is <code>top right</code></li>
    <li><code>duration</code>: duration of transistions (ms)</li>
    <li><code>closeIn</code>: Automatically close the alert in <code>closeIn</code> (ms). If you dont have this, you can close the alert manually</li>
    </ul>
    <h2 id="contributing">Contributing</h2>
    <p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>
    <p>Please make sure to update tests as appropriate.</p>
    <h2 id="project-status">Project Status</h2>
    <p>Ready for production. We will update more styles in the <code>2.0.0</code>.</p>
    <ul>
    <li><code>1.0.4</code> : 4 types of alert in just 1 style. <code>readme.md</code>, <code>vue-basic-alert</code> is really basic.</li>
    <li><code>1.0.5</code> : Fixed bugs</li>
    <li><code>1.0.6</code> : Update <code>entry.esm.ts</code> for import, Animations, more position</li>
    <li><code>2.0.0</code> : <code>To-do</code> 2 more styles and customizable icons, etc.</li>
    </ul>
    <h2 id="license">License</h2>
    <p><a href="https://choosealicense.com/licenses/mit/">MIT</a></p>
    <p>Copyright (c) 2022-present, Jason Anger (An Do)</p>
</template>

<style>
.readme {
    font-family: Arial;
    padding: 20px 50px;
    border-radius: 20px;
    color: #ffffffff;
    background-color: #343434;
    margin: 44px auto;
}
@media screen and (max-width: 700px) {
    .readme {
        font-family: Arial;
        padding: 15px 10px;
    }
}
.readme code.lang-bash {
    height: 26px;
    padding-top: 8px;
    padding-right: 20px;
    padding-bottom: 0px;
    width: 100%;
}
.readme p img {
    max-width: 100%;
    border-radius: 5px;
}
.readme code {
    padding: 5px 10px;
    margin: 6px 3px -6px 2px;
    border-radius: 6px;
    background: #000;
    display: inline-block;
    box-shadow: inset 0px 0px 7px 0px green;
    width: max-content;
    max-width: calc(100% - 20px);
    overflow-x: scroll;
}
.readme code::-webkit-scrollbar {
    display: none;
}
</style>