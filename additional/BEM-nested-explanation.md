https://www.phind.com/search?cache=ad431809-8f4c-42ce-840e-aa7e6e334a74

Let me explain each rule in the provided example:

### Correct Example

```scss
.block {
  &__element {
  }

  &_mod-name {
    &_first-mod-value {
    }
    &_second-mod-value {
    }
  }

  &__element {
    &_el-mod-name {
      &_first-mod-value {
      }
      &_second-mod-value {
      }
    }
  }
}
```

1. `.block` is the main block in the BEM naming convention.
2. `&__element` is a nested rule for defining an element inside the block. It is correct because it follows the BEM naming convention: `.block__element`.
3. `&_mod-name` is a nested rule for defining a modifier for the block. It is correct because it follows the BEM naming convention: `.block_mod-name`.
4. `&_first-mod-value` and `&_second-mod-value` are nested rules for defining different modifier values for the block. They are correct because they follow the BEM naming convention: `.block_mod-name_mod-value`.
5. `&_el-mod-name` is a nested rule for defining a modifier for an element inside the block. It is correct because it follows the BEM naming convention: `.block__element_mod-name`.
6. `&_first-mod-value` and `&_second-mod-value` are nested rules for defining different modifier values for the element. They are correct because they follow the BEM naming convention: `.block__element_mod-name_mod-value`.

### Incorrect Example

```scss
.block {
  &-differnt-block {
    // Bad, create BEM block implicitly
  }

  &__element {
    &-another-element {
      // Bad, create BEM element implicitly
    }
  }

  &__element_boolean-mod {
    // Bad, too long to read
  }

  &_mod-name_mod-value {
    // Bad, mod_name and mod_value should be split
  }
}
```

1. `&-differnt-block` is incorrect because it implicitly creates a new BEM block by concatenating the block names, instead of using the proper BEM naming convention: `.block-different-block`.
2. `&-another-element` is incorrect because it implicitly creates a new BEM element by concatenating the element names, instead of using the proper BEM naming convention: `.block__element-another-element`.
3. `&__element_boolean-mod` is incorrect because it is too long and difficult to read. It should be separated into a proper BEM naming convention: `.block__element_boolean-mod`.
4. `&_mod-name_mod-value` is incorrect because it combines the modifier name and value without separating them. It should follow the BEM naming convention: `.block_mod-name_mod-value`.

The custom rule checks for the following allowed nested patterns:

([^\\&]+): Doesn't have an ampersand.
\\&[.:[][^\\&]\*: Starts with an ampersand followed by a period, colon, or opening bracket, and doesn't contain another ampersand.
\\&\_{1,2}${entityName}: Starts with an ampersand followed by one or two underscores and an entity name (e.g., &\_\_element or &\_modifier).
