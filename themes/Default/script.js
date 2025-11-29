function createChatGPTpopup() {
    // Main container
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");
    document.body.appendChild(chatContainer);

    // Header and tabs
    const chatHeader = document.createElement("div");
    chatHeader.classList.add("chat-header");
    chatContainer.appendChild(chatHeader);

    const tabContainer = document.createElement("div");
    tabContainer.classList.add("tab-container");
    chatHeader.appendChild(tabContainer);

    // About Tab
    const aboutTab = document.createElement("button");
    aboutTab.classList.add("tab-button");
    aboutTab.innerText = "About";
    tabContainer.appendChild(aboutTab);

    // Google Tab & Button
    const googleTab = document.createElement("button");
    googleTab.classList.add("tab-button");
    const googleTabSpan = document.createElement("span");
    googleTabSpan.innerText = "Google";
    googleTab.appendChild(googleTabSpan);
    const googleCloakBtn = document.createElement("button");
    googleCloakBtn.classList.add("ab-cloak-button");
    googleCloakBtn.innerText = "AB";
    googleTab.appendChild(googleCloakBtn);
    tabContainer.appendChild(googleTab);

    // AI Tab & Button
    const chatTab = document.createElement("button");
    chatTab.classList.add("tab-button");
    const chatTabSpan = document.createElement("span");
    chatTabSpan.innerText = "AI";
    chatTab.appendChild(chatTabSpan);
    const chatCloakBtn = document.createElement("button");
    chatCloakBtn.classList.add("ab-cloak-button");
    chatCloakBtn.innerText = "AB";
    chatTab.appendChild(chatCloakBtn);
    tabContainer.appendChild(chatTab);
    
    // Proxy Tab & Button
    const proxyTab = document.createElement("button");
    proxyTab.classList.add("tab-button");
    const proxyTabSpan = document.createElement("span");
    proxyTabSpan.innerText = "Proxy";
    proxyTab.appendChild(proxyTabSpan);
    const proxyCloakBtn = document.createElement("button");
    proxyCloakBtn.classList.add("ab-cloak-button");
    proxyCloakBtn.innerText = "AB";
    proxyTab.appendChild(proxyCloakBtn);
    tabContainer.appendChild(proxyTab);

    // Tools Tab
    const toolsTab = document.createElement("button");
    toolsTab.classList.add("tab-button");
    toolsTab.innerText = "Tools";
    tabContainer.appendChild(toolsTab);

    // AB Cloak Tab
    const abCloakTab = document.createElement("button");
    abCloakTab.classList.add("tab-button");
    abCloakTab.innerText = "AB Cloak";
    tabContainer.appendChild(abCloakTab);

    // Theme Tab
    const themeTab = document.createElement("button");
    themeTab.classList.add("tab-button");
    themeTab.innerText = "Themes 🎨";
    tabContainer.appendChild(themeTab);

    // Control Buttons (Reset and Close)
    const controlButtons = document.createElement("div");
    controlButtons.classList.add("control-buttons");
    chatHeader.appendChild(controlButtons);

    const resetButton = document.createElement("button");
    resetButton.classList.add("reset-button");
    resetButton.innerText = "Reset";
    controlButtons.appendChild(resetButton);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.innerText = "×";
    controlButtons.appendChild(closeButton);

    // Main content iframe
    const iframe = document.createElement("iframe");
    iframe.classList.add("content-iframe");
    chatContainer.appendChild(iframe);

    // About Panel
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("content-panel", "about-page");
    aboutContainer.style.display = "none";
    aboutContainer.innerHTML = `
        <h3>About This Tool</h3>
        <p>This is a custom-made browser utility designed to help you access web content from a floating, draggable, and resizable window. It includes a built-in proxy and various tools to enhance your browsing experience.</p>
        <br>
        <h3>Features:</h3>
        <ul>
            <li>- Made for people who have Blocksi Now</li>
            <li>- Credits: </li>
            <li>- Made by Lumi_f3m :3 (Made original Brown Design + Clever Cloak) </li>
            <li>- cwqwe contributed (Did the rest of the themes + XD) </li>
        </ul>
    `;
    chatContainer.appendChild(aboutContainer);

    // Theme Panel (New!)
    const themeContainer = document.createElement("div");
    themeContainer.classList.add("content-panel", "theme-page");
    themeContainer.style.display = "none";
    themeContainer.innerHTML = `
        <h3>🎨 Choose Your Theme</h3>
        <p>Select a color scheme below to customize the look of the popup.</p>
        <div class="theme-selector-group">
            <label for="theme-selector">Current Theme:</label>
            <select id="theme-selector" onchange="applyTheme(this.value)">
                <option value="default">Default (Brown/Original)</option>
                <option value="dark">Dark Mode</option>
                <option value="blue">Deep Blue</option>
                <option value="green">Forest Green</option>
            </select>
        </div>
        <button id="saveThemeButton">Apply & Save Theme</button>
    `;
    chatContainer.appendChild(themeContainer);

    // Tools Panel
    const toolsContainer = document.createElement("div");
    toolsContainer.classList.add("content-panel");
    toolsContainer.style.display = "none";
    chatContainer.appendChild(toolsContainer);

    // Tools section: Right-click Toggler
    const rightClickSection = document.createElement("div");
    rightClickSection.classList.add("tools-section");
    const rightClickCheckbox = document.createElement("input");
    rightClickCheckbox.type = "checkbox";
    rightClickCheckbox.id = "rightClickToggle";
    const rightClickLabel = document.createElement("label");
    rightClickLabel.innerText = "Enable Right Clicking";
    rightClickLabel.setAttribute("for", "rightClickToggle");
    rightClickSection.appendChild(rightClickCheckbox);
    rightClickSection.appendChild(rightClickLabel);
    toolsContainer.appendChild(rightClickSection);
    
    // Tools section: Javascript Executor
    const codeExecutorSection = document.createElement("div");
    codeExecutorSection.classList.add("tools-section");
    const codeInputLabel = document.createElement("label");
    codeInputLabel.innerText = "Enter Javascript Code:";
    const codeInput = document.createElement("textarea");
    const runCodeButton = document.createElement("button");
    runCodeButton.innerText = "Execute";
    const outputArea = document.createElement("pre");
    codeExecutorSection.appendChild(codeInputLabel);
    codeExecutorSection.appendChild(codeInput);
    codeExecutorSection.appendChild(runCodeButton);
    codeExecutorSection.appendChild(outputArea);
    toolsContainer.appendChild(codeExecutorSection);

    // AB Cloak Launcher Panel
    const abCloakContainer = document.createElement("div");
    abCloakContainer.classList.add("content-panel", "ab-cloak-page");
    abCloakContainer.style.display = "none";
    abCloakContainer.innerHTML = `
        <h1>Lumi's ab launcher</h1>
        <div class="main-controls">
            <label for="urlInput">Enter URL:</label>
            <input type="text" id="urlInput" placeholder="https://example.com">
            <button id="launchButton">Launch Site</button>
        </div>
        <section class="quick-links-section">
            <h2 class="quick-links-title">Quick Links</h2>
            <div class="quick-links-grid">
                <button class="quick-link-button" data-url="https://genizy-math.vercel.app/">GN-Math 1</button>
                <button class="quick-link-button" data-url="https://schoolworkandstuff/">GN-Math 2</button>
                <button class="quick-link-button" data-url="https://tc44.smelly.cc/">RammerHead</button>
                <button class="quick-link-button" data-url="https://soggycake.verymad.net/">RammerHead</button>
                <button class="quick-link-button" data-url="https://fheuwifuhewi.coolscience.cfd/">Truffed</button>
                <button class="quick-link-button" data-url="https://algebrai.burgerbar.cl/">Truffed</button>
                <button class="quick-link-button" data-url="https://low2fv9h2j.raccoon.sbs/">Doge</button>
                <button class="quick-link-button" data-url="https://q6t1u8.ddx.edpuzzle.icu.cdn.cloudflare.net/">DayDreamX</button>
                <button class="quick-link-button" data-url="https://xk2p4q.ddx.deltamath.icu.cdn.cloudflare.net/">DayDreamX</button>
            </div>
        </section>
    `;
    chatContainer.appendChild(abCloakContainer);
    
    // --- THEME LOGIC FUNCTIONS (New!) ---

    function applyTheme(themeName) {
        const chatContainer = document.querySelector(".chat-container");
        if (!chatContainer) return;

        // 1. Remove any existing theme classes
        // **Make sure to add any new theme classes here!**
        chatContainer.classList.remove("theme-dark", "theme-blue", "theme-green"); 
        
        // 2. Add the new theme class, unless it's the default
        if (themeName !== 'default') {
            chatContainer.classList.add('theme-' + themeName); 
        }
    }

    function saveTheme() {
        const selector = document.getElementById('theme-selector');
        if (selector) {
            const selectedTheme = selector.value;
            localStorage.setItem('userTheme', selectedTheme);
            applyTheme(selectedTheme);
            alert(`Theme set to ${selectedTheme} and saved!`);
        }
    }

    function loadTheme() {
        // Load the saved theme on startup
        const savedTheme = localStorage.getItem('userTheme');
        const selector = document.getElementById('theme-selector');
        
        if (savedTheme) {
            applyTheme(savedTheme);
            if (selector) {
                selector.value = savedTheme;
            }
        } else if (selector) {
            // Ensure the dropdown shows the default if nothing is saved
            selector.value = 'default';
        }
    }
    
    // Tab functionality
    function setActiveTab(activeTab) {
        // **UPDATED**: Added themeTab
        const tabs = [aboutTab, googleTab, chatTab, proxyTab, toolsTab, abCloakTab, themeTab];
        
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        activeTab.classList.add("active");

        // **UPDATED**: Added themeContainer
        const containers = [iframe, aboutContainer, toolsContainer, abCloakContainer, themeContainer];
        containers.forEach(container => container.style.display = "none");
        
        // Show the appropriate container
        if (activeTab === aboutTab) {
            aboutContainer.style.display = "flex";
        } else if (activeTab === toolsTab) {
            toolsContainer.style.display = "flex";
        } else if (activeTab === abCloakTab) {
            abCloakContainer.style.display = "flex";
            setupABCloakPanel();
        // **NEW**: Added else-if for themeTab
        } else if (activeTab === themeTab) {
            themeContainer.style.display = "flex";
        } else {
            iframe.style.display = "block";
        }
    }
    
    function setupABCloakPanel() {
        const urlInput = abCloakContainer.querySelector('#urlInput');
        const launchButton = abCloakContainer.querySelector('#launchButton');
        const quickLinksGrid = abCloakContainer.querySelector('.quick-links-grid');
        
        if (launchButton) {
            launchButton.onclick = () => {
                const url = urlInput.value.trim();
                const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
                launchURL(formattedUrl, true);
            };
        }

        if (urlInput) {
            urlInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const url = urlInput.value.trim();
                    const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
                    launchURL(formattedUrl, true);
                }
            });
        }
        
        if (quickLinksGrid) {
            quickLinksGrid.querySelectorAll('.quick-link-button').forEach(button => {
                button.onclick = () => {
                    const url = button.getAttribute('data-url');
                    launchURL(url, true);
                };
            });
        }
    }

    aboutTab.addEventListener("click", () => {
        setActiveTab(aboutTab);
    });

    googleTab.addEventListener("click", (e) => {
        if (!e.target.classList.contains('ab-cloak-button')) {
            iframe.src = "https://www.google.com/webhp?igu=1";
            setActiveTab(googleTab);
        }
    });

    googleCloakBtn.addEventListener("click", () => {
        launchURL("https://www.google.com/webhp?igu=1", true);
    });

    chatTab.addEventListener("click", (e) => {
        if (!e.target.classList.contains('ab-cloak-button')) {
            iframe.src = "chrome://ai-chrome/api-10293";
            setActiveTab(chatTab);
        }
    });

    chatCloakBtn.addEventListener("click", () => {
        launchURL("chrome://ai-chrome/api-10293", true);
    });
    
    proxyTab.addEventListener("click", (e) => {
        if (!e.target.classList.contains('ab-cloak-button')) {
            iframe.src = "https://tc44.smelly.cc/";
            setActiveTab(proxyTab);
        }
    });

    proxyCloakBtn.addEventListener("click", () => {
        launchURL("https://tc44.smelly.cc/", true);
    });

    toolsTab.addEventListener("click", () => {
        setActiveTab(toolsTab);
    });

    abCloakTab.addEventListener("click", () => {
        setActiveTab(abCloakTab);
    });
    
    // **NEW**: Added listener for Theme Tab
    themeTab.addEventListener("click", () => {
        setActiveTab(themeTab);
    });

    // Universal Launcher Function
    function launchURL(url, inAboutBlank) {
        if (!url) {
            alert('Please enter a URL.');
            return;
        }
        
        const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
        
        if (inAboutBlank) {
            const newTab = window.open('about:blank', '_blank');
            if (newTab) {
                newTab.document.title = 'secret :3';
                newTab.document.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>secret :3</title>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <style>
                            body { margin: 0; overflow: hidden; }
                            iframe {
                                position: fixed;
                                top: 0;
                                left: 0;
                                width: 100vw;
                                height: 100vh;
                                border: none;
                                display: block;
                            }
                        </style>
                    </head>
                    <body>
                        <iframe src="${formattedUrl}"></iframe>
                    </body>
                    </html>
                `);
                newTab.document.close();
            } else {
                alert('Please allow pop-ups for this site to launch new tabs.');
            }
        } else {
            iframe.src = formattedUrl;
        }
    }

    // Initial state: Show "About" tab
    setActiveTab(aboutTab);

    // Right-click logic
    let contextMenuBlocked = false;
    const contextMenuHandler = function (event) {
        if (contextMenuBlocked) {
            event.stopPropagation();
        }
    };
    
    rightClickCheckbox.addEventListener("change", function () {
        if (this.checked) {
            document.removeEventListener('contextmenu', contextMenuHandler, true);
        } else {
            document.addEventListener('contextmenu', contextMenuHandler, true);
        }
    });

    // Javascript Executor logic
    runCodeButton.addEventListener("click", () => {
        const code = codeInput.value;
        const sandbox = document.createElement("iframe");
        sandbox.style.display = "none";
        document.body.appendChild(sandbox);
        sandbox.contentWindow.console.log = (message) => {
            outputArea.textContent += message + '\n';
        };
        
        try {
            outputArea.textContent = 'Executing...\n';
            const script = document.createElement("script");
            script.textContent = `try {
                const result = eval(decodeURIComponent('${encodeURIComponent(code)}'));
                window.console.log('Result: ' + result);
            } catch(error) {
                window.console.log('Error: ' + error.message);
            }`;
            sandbox.contentDocument.body.appendChild(script);
        } catch (error) {
            outputArea.textContent = `Setup Error: ${error.message}`;
        } finally {
            setTimeout(() => document.body.removeChild(sandbox), 500);
        }
    });
    
    // Close button logic
    closeButton.onclick = () => document.body.removeChild(chatContainer);
    
    // Reset button logic
    resetButton.onclick = () => {
        window.location.reload();
    };

    // Dragging logic
    let isDragging = false, offsetX, offsetY;

    chatHeader.addEventListener("mousedown", (e) => {
        if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('.tab-container')) {
            isDragging = false;
            return;
        }
        isDragging = true;
        offsetX = e.clientX - chatContainer.offsetLeft;
        offsetY = e.clientY - chatContainer.offsetTop;
        chatHeader.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        chatContainer.style.left = `${e.clientX - offsetX}px`;
        chatContainer.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        chatHeader.style.cursor = "grab";
    });

    // Keyboard shortcut to toggle visibility
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === "e") {
            chatContainer.style.display = chatContainer.style.display === "none" ? "flex" : "none";
            e.preventDefault();
        }
    });

    // **NEW**: Connect the save button functionality
    const saveButton = themeContainer.querySelector('#saveThemeButton');
    saveButton.addEventListener('click', saveTheme);
    
    // **NEW**: Load the saved theme preference right away
    loadTheme(); 
}

createChatGPTpopup();