<template>
    <div class="home">
        <div class="slider">
            <img v-bind:src="image.Image" alt="image">
        </div>
        <div class="content">
            <h1 class="heading1">What is Lorem Ipsum?</h1>
            <p class="para1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <h1 class="heading1">Available courses</h1>
            <p class="para1">These are the lessons available for your professional field. Below are the basis of each game and informative video.</p>
        </div>
        <div class="c-rap">
            <div class="c-blocks">
                <img v-bind:src="image.Image1" alt="image" width="220" height="250">
                <p>Empowerment Technology</p>
            </div>
            <div class="c-blocks">
                <img v-bind:src="image.Image2" alt="image" width="220" height="250">
                <p class="title">Earth & Life</p>
            </div>
            <div class="c-blocks">
                <img v-bind:src="image.Image3" alt="image" width="220" height="250">
                <p>General Mathematics</p>
            </div>
            <div class="c-blocks">
                <img v-bind:src="image.Image4" alt="image" width="220" height="250">
                <p>Reading & Writing</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                image: {
                    Image: "http://teachingsimulator.org/assets/img/index/banner.png",
                    Image1: "https://www.homecareinsight.co.uk/wp-content/uploads/2020/07/connected-technology.jpg",
                    Image2: "https://www.universal-rights.org/wp-content/uploads/2019/09/30212411048_2a1d7200e2_z-1.jpg",
                    Image3: "https://analyticsindiamag.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
                    Image4: "https://cdn.totally.tech/prod/uploads/2019/04/how-to-define-the-scope-of-a-project-2-630x385.jpg"
                }
            }
        }
    }

</script>

<style >
    .home {
        width: 100%;
    }
    .slider {
        width: 100%;
        height: 400px;
    }
    .content {
         width: 100%;
         height: 300px;
         background-color: white;

     }
    .heading1 {
        margin: 20px;
    }
    p {
        margin: 15px;
        font-weight: bold;
    }
    .c-blocks {
        width: 23%;
        height: 200px;
        display: inline-block;
        cursor: pointer;
    }
    .c-rap {
        width: 100%;
        margin-bottom: 50px;
    }
</style>