(function () {
    var TreeScanner = function () {
        this.stack = []
        this.root = document.querySelector('.root')
        this.preBtn = document.querySelector('.pre-btn')
        this.inBtn = document.querySelector('.in-btn')
        this.postBtn = document.querySelector('.post-btn')
    }

    TreeScanner.prototype.preOrder = function (node) {
        this.stack.push(node)
        if (node.firstElementChild) {
            this.preOrder(node.firstElementChild)
        }
        if (node.lastElementChild) {
            this.preOrder(node.lastElementChild)
        }
    }

    TreeScanner.prototype.inOrder = function (node) {
        if (node.firstElementChild) {
            this.inOrder(node.firstElementChild)
        }
        this.stack.push(node)
        if (node.lastElementChild) {
            this.inOrder(node.lastElementChild)
        }
    }

    TreeScanner.prototype.postOrder = function (node) {
        if (node.firstElementChild) {
            this.postOrder(node.firstElementChild)
        }
        if (node.lastElementChild) {
            this.postOrder(node.lastElementChild)
        }
        this.stack.push(node)
    }
    
    TreeScanner.prototype.scanTree = function () {
        var stack = this.stack,
            iter = 0,
            timer
        stack[iter].style.backgroundColor = '#0000ff'
        timer = setInterval(function () {
            if (iter == stack.length - 1) {
                stack[iter].style.backgroundColor = '#fff'
                // scanner.removeClass(stack[iter-1])
                clearInterval(timer)
            } else {
                ++iter
                stack[iter].style.backgroundColor = '#0000ff'
                stack[iter-1].style.backgroundColor = '#fff'
                // scanner.addClass(stack[iter], 'bg-blue')
                // scanner.removeClass(stack[iter-1])
                // console.log(stack[iter].className)
            }
        },500)
    }

    var scanner = new TreeScanner()
    
    scanner.preBtn.addEventListener('click', function () {
        scanner.stack = []
        scanner.preOrder(scanner.root)
        scanner.scanTree()
    })

    scanner.inBtn.addEventListener('click', function () {
        scanner.stack = []
        scanner.inOrder(scanner.root)
        scanner.scanTree()
    })

    scanner.postBtn.addEventListener('click', function () {
        scanner.stack = []
        scanner.postOrder(scanner.root)
        scanner.scanTree()
    })
})();
