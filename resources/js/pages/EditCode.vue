 <template>
  <div id="app">
    <editor
      api-key="no-api-key"
      :init="{
        height: 500,
        menubar: true,
        themes: 'modern',
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount codesample fullscreen',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat help codesample code fullscreen',
      }"
    />
  </div>
</template>

 <script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "app",
  components: {
    editor: Editor,
  },
};
</script>

 <style scoped>
</style>
