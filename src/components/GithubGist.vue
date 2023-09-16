<script setup>
import jsonp from "jsonp";
import { defineProps, ref, computed, watch, onMounted } from "vue";

const props = defineProps(["gistUrl", "gistId", "file", "theme"]);

const gistData = ref("loading...");
const gistErr = ref(false);

const url = computed(() => {
  if (props.gistUrl) {
    return props.gistUrl + ".json";
  }
  if (props.gistId) {
    return `https://gist.github.com/${props.gistId}.json`;
  }
});

const params = computed(() => {
  if (props.file) {
    return `file=${props.file}`;
  }
  return "";
});

const fullUrl = computed(() => {
  return `${url.value}?${params.value}`;
});

function getGistData() {
  jsonp(fullUrl.value, { timeout: 20000 }, (err, response) => {
    if (err) {
      gistErr.value = true;
      return;
    }
    gistData.value = response.div;
  });
}

onMounted(() => {
  watch(
    fullUrl,
    () => {
      gistErr.value = false;
      gistData.value = "loading...";
      getGistData();
    },
    { immediate: true, deep: true }
  );
});
</script>

<template>
  <template v-if="gistErr">
    <picture>
      <img
        id="notFound"
        height="100%"
        width="100%"
        src="https://user-images.githubusercontent.com/883233/102043641-d4817580-3d89-11eb-885d-2786373932d4.png"
        alt="404"
      />
    </picture>
  </template>
  <template v-else>
    <div v-html="gistData" :class="theme == 'dark' ? 'dark-theme' : ''"></div>
  </template>
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");

.dark-theme .gist .highlight {
  background: #141414;
}
.dark-theme .gist .blob-num,
.dark-theme .gist .blob-code-inner,
.dark-theme .gist .highlight,
.dark-theme .gist .pl-enm,
.dark-theme .gist .pl-ko,
.dark-theme .gist .pl-mo,
.dark-theme .gist .pl-mp1 .pl-sf,
.dark-theme .gist .pl-ms,
.dark-theme .gist .pl-pdc1,
.dark-theme .gist .pl-scp,
.dark-theme .gist .pl-smc,
.dark-theme .gist .pl-som,
.dark-theme .gist .pl-va,
.dark-theme .gist .pl-vpf,
.dark-theme .gist .pl-vpu,
.dark-theme .gist .pl-mdr {
  color: #aab1bf;
}
.dark-theme .gist .pl-mb,
.dark-theme .gist .pl-pdb {
  font-weight: 700;
}
.dark-theme .gist .pl-c,
.dark-theme .gist .pl-c span,
.dark-theme .gist .pl-pdc {
  color: #5b6270;
  font-style: italic;
}
.dark-theme .gist .pl-sr .pl-cce {
  color: #56b5c2;
  font-weight: 400;
}
.dark-theme .gist .pl-ef,
.dark-theme .gist .pl-en,
.dark-theme .gist .pl-enf,
.dark-theme .gist .pl-eoai,
.dark-theme .gist .pl-kos,
.dark-theme .gist .pl-mh .pl-pdh,
.dark-theme .gist .pl-mr {
  color: #61afef;
}
.dark-theme .gist .pl-ens,
.dark-theme .gist .pl-vi {
  color: #be5046;
}
.dark-theme .gist .pl-enti,
.dark-theme .gist .pl-mai .pl-sf,
.dark-theme .gist .pl-ml,
.dark-theme .gist .pl-sf,
.dark-theme .gist .pl-sr,
.dark-theme .gist .pl-sr .pl-sra,
.dark-theme .gist .pl-src,
.dark-theme .gist .pl-st,
.dark-theme .gist .pl-vo {
  color: #56b5c2;
}
.dark-theme .gist .pl-eoi,
.dark-theme .gist .pl-mri,
.dark-theme .gist .pl-pds,
.dark-theme .gist .pl-pse .pl-s1,
.dark-theme .gist .pl-s,
.dark-theme .gist .pl-s1 {
  color: #97c279;
}
.dark-theme .gist .pl-k,
.dark-theme .gist .pl-kolp,
.dark-theme .gist .pl-mc,
.dark-theme .gist .pl-pde {
  color: #c578dd;
}
.dark-theme .gist .pl-mi,
.dark-theme .gist .pl-pdi {
  color: #c578dd;
  font-style: italic;
}
.dark-theme .gist .pl-mp,
.dark-theme .gist .pl-stp {
  color: #818896;
}
.dark-theme .gist .pl-mdh,
.dark-theme .gist .pl-mdi,
.dark-theme .gist .pl-mdr {
  font-weight: 400;
}
.dark-theme .gist .pl-mdht,
.dark-theme .gist .pl-mi1 {
  color: #97c279;
  background: #020;
}
.dark-theme .gist .pl-md,
.dark-theme .gist .pl-mdhf {
  color: #df6b75;
  background: #200;
}
.dark-theme .gist .pl-corl {
  color: #df6b75;
  text-decoration: underline;
}
.dark-theme .gist .pl-ib {
  background: #df6b75;
}
.dark-theme .gist .pl-ii {
  background: #e0c184;
  color: #fff;
}
.dark-theme .gist .pl-iu {
  background: #e05151;
}
.dark-theme .gist .pl-ms1 {
  color: #aab1bf;
  background: #373b41;
}
.dark-theme .gist .pl-c1,
.dark-theme .gist .pl-cn,
.dark-theme .gist .pl-e,
.dark-theme .gist .pl-eoa,
.dark-theme .gist .pl-eoac,
.dark-theme .gist .pl-eoac .pl-pde,
.dark-theme .gist .pl-kou,
.dark-theme .gist .pl-mm,
.dark-theme .gist .pl-mp .pl-s3,
.dark-theme .gist .pl-mq,
.dark-theme .gist .pl-s3,
.dark-theme .gist .pl-sok,
.dark-theme .gist .pl-sv,
.dark-theme .gist .pl-mb {
  color: #d19965;
}
.dark-theme .gist .pl-enc,
.dark-theme .gist .pl-entc,
.dark-theme .gist .pl-pse .pl-s2,
.dark-theme .gist .pl-s2,
.dark-theme .gist .pl-sc,
.dark-theme .gist .pl-smp,
.dark-theme .gist .pl-sr .pl-sre,
.dark-theme .gist .pl-stj,
.dark-theme .gist .pl-v,
.dark-theme .gist .pl-pdb {
  color: #e4bf7a;
}
.dark-theme .gist .pl-ent,
.dark-theme .gist .pl-entl,
.dark-theme .gist .pl-entm,
.dark-theme .gist .pl-mh,
.dark-theme .gist .pl-pdv,
.dark-theme .gist .pl-smi,
.dark-theme .gist .pl-sol,
.dark-theme .gist .pl-mdh,
.dark-theme .gist .pl-mdi {
  color: #df6b75;
}
</style>
