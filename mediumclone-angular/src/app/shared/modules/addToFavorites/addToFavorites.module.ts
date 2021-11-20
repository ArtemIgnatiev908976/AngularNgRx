import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AddToFavoriteComponent} from 'src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component'

@NgModule({
  imports: [CommonModule],
  declarations: [AddToFavoriteComponent],
  exports: [AddToFavoriteComponent]
})
export class AddToFavoriteModule {}
