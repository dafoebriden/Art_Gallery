<template>
  <div class="container-fluid m-0 p-0">
    <div class="row mt-2 p-0">
      <div mt-2 p-0 class="column">
        <div class="mb-2 mx-1 p-0 frame" v-for="art in art">
          <img :src="art.imgUrls.raw" :alt="art.description" style="contain: content;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pop from '../utils/Pop';
import { artsService } from '../services/ArtsService.js'
import { computed, onMounted, popScopeId } from 'vue';
import { AppState } from '../AppState';



export default {
  setup() {

    const editableSeachQuery = ref('')

    async function getArt() {
      try {
        await artsService.getArt()
      } catch (error) {
        Pop.error(error)

      }
    }
    onMounted(() => {
      getArt();
    });

    return {
      editableSeachQuery,
      art: computed(() => AppState.art),
      currentPage: computed(() => AppState.currentPage),
      totalPages: computed(() => AppState.totalPages),
      // savedSearch: computed(() => AppState.savedSearch)
      async changePage(pageNumber) {
        try {
          if (!editableSeachQuery.value) {
            await artsService.changePage(pageNumber)
          }
          else {
            await artsService.changePageWithSearchQuery(editableSearchQuery.value, pageNumber)
          }
        } catch (error) {
          Pop.error(error)
        }
      },

    }
  }
}
</script>

<style scoped lang="scss">
.column {
  columns: 4;
  column-gap: 0;
  column-rule: 0;
}

img {
  max-width: 100%;
}

.frame {
  border: 10px;
  border-color: black;
  border-style: solid;
  box-shadow: 1px 1px 3px black;
}

template {
  background-image: url(../assets/img/Basic\ Wallpaper.avif);
}
</style>
