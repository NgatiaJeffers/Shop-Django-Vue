<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="logo" :to="{ name: 'Home' }">Shop</router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="'Category'">Summer</router-link>
          <router-link class="link" to="#">Winter</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
          <router-link class="link" to="#">
            <span class="icon"><i class="fas fa-shopping-bag"></i></span>
              <span>Cart ({{ cartTotalLength }})</span>
          </router-link>
        </ul>
      </div>
    </nav>

<img src="../assets/Icons/bars-regular.svg"  @click="toggleMobileNav" class="menu-icon" v-show="mobile">
<!-- <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" /> -->
<transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" to="#">Summer</router-link>
        <router-link class="link" to="#">Winter</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
        <router-link class="link" to="#">
            <span>Cart</span>
            <span class="icon"><i class="fas fa-shopping-bag"></i></span>
        </router-link>
      </ul>
    </transition>
  </header>

  <div class="is-loading-bar has-text-centered mt-6" :class="{ 'is-loadig': $store.state.isLoading }">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";

export default {
  name: "navigation",
  components: { menuIcon },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      cart: {
        items: []
      },
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
  // Initialize store
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
    mounted() {
    this.cart = this.$store.state.cart
  },
  // Increment items in cart
  computed: {
    cartTotalLength() {
      let totalLength = 0

      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity
      }

      return totalLength;
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//     0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #000;
  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
  }
  nav {
    display: flex;
    padding: 25px 0;
    .branding {
      display: flex;
      align-items: center;
      .logo {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }
    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      ul {
        margin-right: 32px;
        .link {
          margin-right: 32px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }
    .mobile-user-menu {
      margin-right: 40px;
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
    .link {
      padding: 15px 0;
      color: #fff;
    }
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-block: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.is-loading-bar {
  height: 0;
  overflow: hidden;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &.is-loading {
    height: 80px;
  }
}
</style>
