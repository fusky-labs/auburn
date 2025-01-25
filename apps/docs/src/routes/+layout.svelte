<script lang="ts">
  import "@fontsource/inter/300.css"
  import "@fontsource/inter/400.css"
  import "@fontsource/inter/700.css"
  import "@fontsource/inter/800.css"

  import { Footer, Navbar } from "$lib/components/Base"
  import "../app.css"

  let { children } = $props()
</script>

<Navbar />
{@render children()}
<Footer />
